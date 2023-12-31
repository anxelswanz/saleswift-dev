import React, { useEffect, useState } from 'react'
import { Grid, Image } from 'antd-mobile'
import Header from '../../../category/components/header/Header'
import style from './style.module.css'
import api from '../../../../api'
import { useNavigate } from 'react-router-dom'
import avatar from '../../../../assets/pics/avatar/blackcat.png'
import { LocationFill } from 'antd-mobile-icons'

export default function ShowFav() {

    //定义路由
    const navigate = useNavigate()


    //用于保存传递上来的数组
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [data])




    async function getData() {
        console.log('123');
        const user = localStorage.getItem('user');
        const userObj = JSON.parse(user);
        const userId = userObj.userId;
        let res = await api.getFavItems({ userId: userId });
        console.log('data=>', data);
        setData(res.data.obj);

    }

    let items = [];
    if (data !== false) {
        console.log("data", data);
        items = data.map((item) => {
            return <Grid.Item>
                <div style={{
                    marginBottom: '0.2rem',
                    marginTop: '0.2rem',
                    position: 'relative'
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

                <div >
                    <LocationFill /> <span>{item.city} {item.address}</span>
                </div>
                <div style={{
                    marginTop: '0.2rem',
                    fontSize: '0.3rem'
                }}>{item.name}</div>
            </Grid.Item>
        })
    }


    return (
        <div>
            {/* header */}
            <Header title='My Favourite' />

            {/* nav */}
            <div>

            </div>
            {/* content */}
            <div className={style.content}>
                <Grid columns={2}>
                    {data === false ? <div>You don't have any favourite item yet</div> : items}

                </Grid>
            </div>
        </div>
    )
}
