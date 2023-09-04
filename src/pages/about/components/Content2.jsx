import React, { useEffect, useState } from 'react'
import api from '../../../api'
import { Button, Grid, Toast } from 'antd-mobile';
import avatar from '../../../assets/pics/avatar/blackcat.png'
import style from './style.module.css'
export default function Content() {



    const [followings, setFollowings] = useState([]);
    const [user, setUser] = useState({})

    useEffect(() => {
        getData();
    }, [followings])

    async function getData() {
        const user = localStorage.getItem("user");
        const userObj = JSON.parse(user);
        setUser(userObj);
        const userId = userObj.userId;
        let res = await api.getFollowing({ userId: userId });
        setFollowings(res.data.obj);
    }

    async function unfollow(followId) {

        Toast.show({
            content: 'Please wait...',
            icon: 'loading'
        })
        const user = localStorage.getItem('user');
        const userObj = JSON.parse(user);
        const userId = userObj.userId;
        console.log('followId', followId);
        let res1 = await api.followUser({ userId: userId, followId: followId })
        let res2 = await api.getUserById({ userId: userId })
        console.log('res2', res2);
        let newUser = res2.data.obj;
        newUser.password = '';
        newUser.code = '';
        localStorage.setItem('user', JSON.stringify(newUser));
    }

    const persons = followings.map((following) => {
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

            <span style={{ color: 'white' }}>{following.name}</span>
            &nbsp; &nbsp;
            <span>following: {following.following}  Following: {following.following}</span>
            &nbsp;
            <Button color='danger' size='mini' onClick={() => { unfollow(following.userId) }}>Unfollow</Button>
        </Grid.Item>
    })

    return (
        <div>
            <div className={style.bodybox}>
                <div className={style.head}>
                    My following : {user.following}
                </div>
                <Grid columns={1}>
                    {persons}
                </Grid>
            </div>
        </div>
    )
}
