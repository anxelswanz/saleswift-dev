import React, { useEffect, useState } from 'react'
import MyHeader from '../../components/header/MyHeader'
import { useNavigate } from 'react-router-dom'
import { IndexBar, List } from 'antd-mobile'
export default function City() {

    //获取路由用于跳转
    const navigate = useNavigate();
    //首字母
    const charCodeOfA = 'A'.charCodeAt(0)
    //state cities用于保存useEffect取出来的cities的数据
    const [cities, setCities] = useState([]);

    //城市Example
    const groups = [
        {
            initial: 'M',
            name: 'Manchester',
            cityCode: '00009'
        }, {
            initial: 'N',
            name: 'Newcastle',
            cityCode: '00010'
        }, {
            initial: 'N',
            name: 'Nottingham',
            cityCode: '00011'
        }, {
            initial: 'L',
            name: 'London',
            cityCode: '00012'
        }
        , {
            initial: 'E',
            name: 'Edingburg',
            cityCode: '00013'
        }
        , {
            initial: 'C',
            name: 'Cardiff',
            cityCode: '00014'
        }, {
            initial: 'B',
            name: 'Birmingham',
            cityCode: '00015'
        }
        , {
            initial: 'L',
            name: 'Liverpool',
            cityCode: '00016'
        }
        , {
            initial: 'G',
            name: 'Glasgow',
            cityCode: '00017'
        }
        , {
            initial: 'E',
            name: 'Essex',
            cityCode: '00018'
        },
        {
            initial: 'S',
            name: 'Sheffield',
            cityCode: '00019'
        },
        {
            initial: 'O',
            name: 'Oxford',
            cityCode: '00020'
        },
        {
            initial: 'C',
            name: 'Cambridge',
            cityCode: '00021'
        },
        {
            initial: 'B',
            name: 'Bristol',
            cityCode: '00022'
        },
    ]

    // 一个对象数组 cities [ 'A', { ... } ] 
    const times = Array(26)
        .fill('')
        .map((_, i) => ({
            title: String.fromCharCode(charCodeOfA + i),
        }))
    let citylist = [];

    //进行首字母判断，若符合，则加入
    async function decideInitial() {
        let list = []
        times.map((word) => {
            groups.map((city) => {
                if (city.initial == word.title) {
                    list.push(city.name)
                }
            })
            if (list.length != 0) {
                const { title } = word;
                citylist.push({
                    title: title,
                    items: list
                })
            }
            list = []
        })
    }

    //2.点击事件获取到参数
    //先声明state
    const [param, setParam] = useState('');
    //若param 发生变化，则调用useEffect

    //调用函数并且存储数据
    useEffect(() => {
        decideInitial();
        setCities(citylist);
        //这里用于param发生变化点击传输数据
        if (param !== '') {
            navigate(`/home?city=${param}`)
        }
    }, [param])




    function click(item) {
        console.log('进入click');
        console.log('item', item);
    }
    return (
        <div>
            <MyHeader title={'Please choose your city'} />
            <div style={{ height: window.innerHeight }} >
                <IndexBar>
                    {
                        cities.map(group => {
                            const { title, items } = group
                            return (
                                <IndexBar.Panel
                                    index={title}
                                    title={`${title}`}
                                    key={`${title}`}
                                >
                                    <List>
                                        {items.map((item, index) => (
                                            <div onClick={() => { setParam(item) }}>
                                                <List.Item key={index}>{item}</List.Item>
                                            </div>
                                        ))}
                                    </List>
                                </IndexBar.Panel>
                            )
                        })}
                </IndexBar>
            </div>
        </div>
    )
}
