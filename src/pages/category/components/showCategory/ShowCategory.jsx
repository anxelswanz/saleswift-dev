import React, { useEffect, useState } from 'react'
import MyHeader from '../../../../components/header/MyHeader'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../header/Header';
import { Grid, Image, Space } from 'antd-mobile';
import Content from '../../../detail/components/ItemContent';
import style from './style.module.css'
import api from '../../../../api';
import Photo from '../../../../assets/pics/banner/banner1.png'
import avatar from '../../../../assets/pics/avatar/blackcat.png'
import { LocationFill } from 'antd-mobile-icons';
export default function ShowCategory() {

    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams();

    //定义key 用来保存传来的分类值
    const [key, setKey] = useState('');
    const [name, setName] = useState();


    //定义返回商品的数组
    const [items, setItems] = useState([])
    useEffect(() => {

        console.log('photo=>', typeof Photo);
        //设定key值
        setKey(search.get('key'))
        //分类名字
        setName(search.get('name'))

        //axios获取值
        getData(key)
    }, [key, name])



    async function getData(key) {

        console.log(111);
        if (key !== '') {
            let res = await api.getByCategory({ name: key });
            setItems(res.data.obj)
        }
    }



    const showItems = items.map((item) => {
        //设置itemid
        return <Grid.Item>

            <div style={{
                marginBottom: '0.2rem',
                marginTop: '0.2rem',

            }}>
                <img src={avatar} style={{
                    width: '12%',
                    height: '12%',
                    borderRadius: '50%',

                }} />  <span style={{ color: '#1677ff', fontWeight: '600' }}>{item.username} </span><span style={{ position: 'absolute', right: '0.2rem' }}> {item.releaseDate}</span>
            </div>

            <div style={{
                position: 'relative'
            }} onClick={() => { navigate(`/detail?itemid=${item.itemId}`) }} >
                <Image src={item.filepath} style={{
                    width: '3rem',
                    height: '2.5rem',
                    paddingLeft: '0.3rem',
                    borderRadius: '5%',

                }} />

                <div style={{
                    position: 'absolute',
                    bottom: '0.15rem',
                    left: '0.2rem',
                    fontSize: '0.5rem',
                    fontWeight: '600',
                    color: 'red',
                    textAlign: 'center',
                }}>
                    ￡{item.price}
                </div>
            </div>

            <div style={{}}>
                <LocationFill /> <span>{item.city} {item.address}</span>
            </div>
            <div style={{
                marginTop: '0.2rem',
                fontSize: '0.3rem'
            }}>{item.name}</div>

        </Grid.Item>

    })

    return (
        <div>
            {/* header */}
            <Header />
            {/* 分类标题 */}
            <div style=
                {{
                    display:
                        key === '' ? 'none' : 'block',
                    fontSize: '0.5rem',
                    marginTop: '0.4rem',
                    textAlign: 'center',
                    fontWeight: '600'
                }}>
                {name}
            </div>
            {/* nav */}
            <div>

            </div>
            {/* content */}
            <div className={style.content}>
                <Grid columns={2}>
                    {showItems}
                </Grid>
            </div>
        </div>
    )
}
