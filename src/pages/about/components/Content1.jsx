import React, { useEffect, useState } from 'react'
import api from '../../../api'
import { Button, Grid } from 'antd-mobile';
import avatar from '../../../assets/pics/avatar/blackcat.png'
import style from './style.module.css'
export default function Content() {



    const [followers, setFollowers] = useState([]);
    const [user, setUser] = useState({})

    useEffect(() => {
        getData();

    }, [followers])

    async function getData() {
        const user = localStorage.getItem("user");
        const userObj = JSON.parse(user);
        setUser(userObj);
        const userId = userObj.userId;
        let res = await api.getFollowers({ userId: userId });
        setFollowers(res.data.obj);
    }



    const persons = followers.map((follower) => {
        return <Grid.Item
            style={{
                marginTop: '0.3rem',
                paddingLeft: '0.5rem',
                height: '0.6rem',
                fontSize: '0.3rem'
            }}>
            <img
                src={avatar}
                style={{ borderRadius: '50%', width: '0.8rem', height: '0.8rem' }}
            /> &nbsp;

            <span style={{ color: 'white' }}>{follower.name}</span>
            &nbsp; &nbsp;
            <span>Followers: {follower.followers}  Following: {follower.following}</span>
            &nbsp;

        </Grid.Item>
    })

    return (
        <div>
            <div className={style.bodybox}>
                <div className={style.head}>
                    My followers : {user.followers}
                </div>
                <Grid columns={1}>
                    {persons}
                </Grid>
            </div>
        </div>
    )
}
