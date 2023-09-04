import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import blackcat from '../../../assets/pics/avatar/blackcat.png'
import { Button, Space, Toast } from 'antd-mobile'
import { LocationFill } from 'antd-mobile-icons'
import api from '../../../api'
export default function Content(props) {

    //判断是否添加到fav
    const [flag, setFlag] = useState(false)


    //设置obj来存储数据
    const [obj, setObj] = useState({})

    //ifFollow boolean 判断用户是否关注该用户
    const [ifFollow, setIfFollow] = useState(false)

    useEffect(() => {
        console.log('props', props.obj);
        setObj(props.obj)
    })

    //关注用户
    async function follow() {

        Toast.show({
            content: 'Please wait...',
            icon: 'loading'
        })
        const user = localStorage.getItem('user');
        const userObj = JSON.parse(user);
        const userId = userObj.userId;
        const followId = obj.userId;
        console.log('followId', followId);
        let res1 = await api.followUser({ userId: userId, followId: followId })
        let res2 = await api.getUserById({ userId: userId })
        console.log('res2', res2);
        let newUser = res2.data.obj;
        newUser.password = '';
        newUser.code = '';
        localStorage.setItem('user', JSON.stringify(newUser));
        const uuu = localStorage.getItem('user')
        console.log('uuu', uuu);

        //判断用户是否关注
        let res = await api.ifFollow({ userId: userId, followId: followId });
        console.log(res);
        setIfFollow(res.data.obj);
        console.log(ifFollow);
    }

    async function addToFav() {
        const user = localStorage.getItem('user');
        const userObj = JSON.parse(user);
        const userId = userObj.userId;
        const itemId = obj.itemId;
        console.log(userId);
        let res = await api.ifAddFav({ userId: userId, itemId: itemId })
        setFlag(res.data.obj);

    }

    return (
        <div>
            {/* 用户头像名称 */}
            <div className={style.userheader} >
                {/* 头像 */}
                <img
                    className={style.avatarcircle}
                    src={blackcat}
                />
                <span style={{ marginLeft: '0.3rem', fontWeight: '600', fontSize: '0.35rem' }}>{obj.user}</span>

                {
                    ifFollow ?
                        <div>
                            <div className={style.unfollow} onClick={follow}>
                                <span className='iconfont icon-yiguanzhu' style={{ fontSize: '0.6rem' }}></span>
                            </div>
                        </div>
                        :
                        <div className={style.follow}>
                            <div className={style.followbox} onClick={follow}>
                                <span className='iconfont icon-guanzhu'></span> Follow
                            </div>
                        </div>
                }


            </div>
            <Space justify='between' style={{ '--gap': '120px' }}>
                {/* 价格 */}
                <div className={style.price}>
                    ￡{obj.price}
                </div>
                {/* 价格 */}
                <div className={style.addtofav} >
                    {flag ? <span className='iconfont icon-shoucang1'
                        style={{ fontSize: '0.7rem', color: '#1677FF' }}
                        onClick={() => {
                            addToFav();
                            setFlag(false);
                            Toast.show({
                                icon: 'loading',
                                content: 'Remove from your favourite',
                                duration: 700
                            })
                        }}></span>
                        : <span onClick={() => {
                            setFlag(true);
                            addToFav();
                            Toast.show({
                                icon: 'success',
                                content: 'Add to favourite successfully',
                            })
                        }} className='iconfont icon-shoucang'
                            style={{ fontSize: '0.7rem', color: '#1677FF' }}></span>}

                </div>
            </Space>

            {/* 名字 */}
            <div style={{ fontWeight: '600', fontSize: '0.4rem', color: '#1677ff', textIndent: '0.6rem' }}>
                {obj.name}
            </div>
            {/* 地址 */}
            <div className={style.itemlocation}>
                <LocationFill /> {obj.address}
            </div>
            {/* 图片 */}
            <div>
                <img
                    //src={`../../../assets/pics/recommend_goods_example/${obj.url}.png`}
                    src={obj.filepath}
                    className={style.picture}
                />
            </div>

            {/* 介绍 */}
            <div className={style.description}>
                {obj.description}
            </div>

            {/* 购买按钮 */}
            <div className='buyNow'>
                <Button block color='success' size='large' >I want now</Button>
                <Button block color='primary' size='large' >Contact the owner</Button>
            </div>

        </div>
    )
}
