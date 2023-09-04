import React, { useEffect } from 'react'
import { SearchBar, Space, SideBar, Grid, Button } from 'antd-mobile'
import { useState } from 'react'
import style from './style.module.css'
import Footer from '../../components/footer/Footer'
import { furniture, decoration } from './data'
import { useNavigate } from 'react-router-dom'
import Header from './components/header/Header'
export default function Category() {

    //tabs数据
    const tabs = [
        {
            key: 'Furniture',
            title: 'Furniture',
        },
        {
            key: 'Clothes',
            title: 'Clothes',
        },
        {
            key: 'Decoration',
            title: 'Decoration',
        },
        {
            key: 'Lamp',
            title: 'Lamp',
        },
        {
            key: 'Kitchen',
            title: 'Kitchen',
        },
        {
            key: 'Appliance',
            title: 'Appliance',
        },
        {
            key: 'Baby',
            title: 'Baby',
        },
        {
            key: 'Bathroom',
            title: 'Bathroom',
        },
        {
            key: 'Outdoors',
            title: 'Outdoors',
        },
        {
            key: 'Bed',
            title: 'Bed & Mattress',
        },
        {
            key: 'vase',
            title: 'Vase & Vegetations',
        },
        {
            key: 'Cleaning',
            title: 'Cleaning',
        }, {
            key: 'Floor',
            title: 'Floor',
        }, {
            key: 'Storage',
            title: 'Storage',
        }, {
            key: 'Office',
            title: 'Office'
        }, {
            key: 'Study',
            title: 'Study'
        }
    ]
    //用于保存tabs点击数据
    const [value, setValue] = useState('Furniture');
    //分类数据
    const [items, setItems] = useState([])


    //useEffect
    useEffect(() => {

        switch (value) {
            case 'Furniture':
                setItems(furniture);
                break;
            case 'Decoration':
                setItems(decoration);
                break;
        }
    })
    //路由导航
    const navigate = useNavigate();
    //遍历数据
    const showItems = items.map((item) => {
        return <Grid.Item>
            <img
                style={{
                    width: '2.4rem',
                    height: '2.3rem',
                    marginTop: '0.3rem',
                    paddingLeft: '0.2rem'
                }}
                src={item.url}
                onClick={() => { navigate(`/showCat?key=${item.key}&name=${item.name}`) }}
            />
            <div style={{
                textAlign: 'center',
                fontSize: '0.3rem',
                height: '0.4rem',
                lineHeight: '0.4rem',
                fontWeight: '500'
            }}>{item.name}</div>
        </Grid.Item>
    });



    function toContent(key) {
        console.log(key);
    }


    return (
        <div>
            {/* header */}
            <Header />

            {/* 个人卖家 商铺 */}

            <div className={style.select}>
                <Space direction='horizontal' >
                    <div><Button>Individual Seller</Button></div>
                    <div><Button>Special Supplier</Button></div>
                </Space>
            </div>

            {/* Category */}
            <Space direction='horizontal'>
                <div className={style.catleft}>
                    <SideBar defaultActiveKey='Furniture' style={{ '--height': '17rem' }}
                        onChange={(v) => { setValue(v) }}>
                        {tabs.map(item => (
                            <SideBar.Item
                                key={item.key}
                                title={item.title}
                            />
                        ))}
                    </SideBar>
                </div>
                <div className={style.catRight}>
                    <div className={style.rightHeader}>
                        {value}
                    </div>
                    <Grid columns={2}>
                        {showItems}
                    </Grid>
                </div>
            </Space>

            <Footer />
        </div>
    )
}
