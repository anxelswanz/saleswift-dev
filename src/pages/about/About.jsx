import React from 'react'
import blackcat from '../../assets/pics/avatar/blackcat.png'
import style from './style.module.css'
import { Space, Grid, Button } from 'antd-mobile'
import { ClockCircleOutline } from 'antd-mobile-icons'
import { useState, useEffect } from 'react'
import Loginfloat from '../../components/loginfloat/Loginfloat'
//导入商品图片
import example1 from '../../assets/pics/recommend_goods_example/bed-1.png';
import example2 from '../../assets/pics/recommend_goods_example/bed-2.png'
import example3 from '../../assets/pics/recommend_goods_example/closet-1.png'
import example4 from '../../assets/pics/recommend_goods_example/lamp-1.png'
import example5 from '../../assets/pics/recommend_goods_example/sofa-1.png'
import example6 from '../../assets/pics/recommend_goods_example/vase-1.png'
import { useNavigate } from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type'
export default function About() {
    const navigate = useNavigate()
    //判断是否登录
    const [iflogin, setIflogin] = useState(false)
    //初始化对象
    let defaultObj = {
        name: 'Guest',
        followers: 0,
        following: 0,
        userid: '',
        balance: 0
    }
    const [user, setUser] = useState(defaultObj)

    useEffect(() => {

        const user = localStorage.getItem('user');
        let userObj = {};
        if (user !== null && user !== '') {
            userObj = JSON.parse(user);
            console.log('about user', user);
            setUser(userObj)
        }
        //查看是否登陆状态
        const flag = localStorage.getItem('iflogin')
        let iftrue = false;
        flag === 'true' ? iftrue = true : iftrue = false;
        console.log(typeof iftrue, iftrue);
        setIflogin(iftrue)

        console.log('following', user.following);
    }, [])

    //查看余额
    function seeBalance() {
        const params = 'seeBalance'
        navigate(`/passwordInput?title=${params}`)
    }

    function logout() {
        localStorage.setItem('user', '');
        localStorage.setItem('iflogin', false);
        navigate('/login')
    }

    return (
        <div className={style.aboutbody}>
            {/* 设置 */}
            <div>
                <span className='iconfont icon-shezhi'
                    style={{
                        position: 'absolute',
                        right: '0.3rem',
                        top: '0.3rem',
                        fontSize: '0.5rem'
                    }}></span>
            </div>
            {/* 头像 */}
            <div className={style.avatarbox}>
                <img
                    className={style.avatarcircle}
                    src={blackcat}
                />
                <Space direction='vertical'>
                    <span style={{ marginLeft: '0.3rem', fontWeight: '600', fontSize: '0.35rem' }}>{user.name}</span>
                    <span style={{ marginLeft: '0.3rem' }}>Alrady joined: {user.days} days</span>
                </Space>
            </div>
            {/* 收藏 历史记录 关注 粉丝 */}
            <div className={style.list1}>
                <Grid columns={4} gap={1}>
                    <Grid.Item style={{ textAlign: 'center' }}>
                        <Space direction='vertical' style={{ '--gap-vertical': '8px' }}>
                            <span className='iconfont icon-shoucang'
                                onClick={() => { navigate('/showFav') }}
                                style={{ fontSize: '0.55rem', color: '#1677ff' }}>
                            </span>
                            <span style={{ fontSize: '0.2rem' }}>
                                Favourite
                            </span>
                        </Space>
                    </Grid.Item>

                    <Grid.Item style={{ textAlign: 'center' }}>
                        <Space direction='vertical' style={{ '--gap-vertical': '8px' }}>
                            <ClockCircleOutline
                                style={{ fontSize: '0.55rem', color: '#1677ff' }} />
                            <span style={{ fontSize: '0.2rem' }}>
                                History
                            </span>
                        </Space>
                    </Grid.Item>

                    <Grid.Item style={{ textAlign: 'center' }}>
                        <Space direction='vertical' style={{ '--gap-vertical': '8px' }} onClick={() => { navigate("/following") }}>
                            <span style={{ fontSize: '0.50rem', color: '#1677ff', fontWeight: '400' }} >{user.following}</span>
                            <span style={{ fontSize: '0.2rem' }}>
                                Following
                            </span>
                        </Space>
                    </Grid.Item>

                    <Grid.Item style={{ textAlign: 'center' }}>
                        <Space direction='vertical' style={{ '--gap-vertical': '8px' }} onClick={() => { navigate("/followers") }}>
                            <span style={{ fontSize: '0.50rem', color: '#1677ff', fontWeight: '400' }} >{user.followers}</span>
                            <span style={{ fontSize: '0.2rem' }}>
                                Followers
                            </span>
                        </Space>
                    </Grid.Item>
                </Grid>
            </div>
            {/*我发布的  */}
            <div className={style.postpurchase}>
                <Grid columns={2}>
                    <Grid.Item>
                        <span className='iconfont icon-huowu'
                            style={{ color: 'grey', fontSize: '0.5rem' }}></span> Post
                    </Grid.Item>
                    <Grid.Item>
                        <span className='iconfont icon-goumai'
                            style={{ color: 'grey', fontSize: '0.5rem' }}></span> Purchase
                    </Grid.Item>
                </Grid>
            </div>

            {/* 我买的 */}
            <div >
                <div
                    style={{
                        width: '90%',
                        marginLeft: '0.3rem',
                        fontSize: '0.3rem',
                        fontWeight: '600',
                        marginTop: '0.15rem',
                        borderTop: '0.7px solid grey',
                        paddingTop: '0.2rem'
                    }}>
                    My Wallet
                </div>
                <div className={style.wallet}>
                    <Grid columns={2}>
                        <Grid.Item style={{ color: '#1677ff' }}>
                            <span className='iconfont icon-yingbang' style={{ fontSize: '0.5rem' }}></span>  Top up
                        </Grid.Item>
                        <Grid.Item style={{ color: '#1677ff' }} onClick={seeBalance}>
                            <span className='iconfont icon-zhanghuyue' style={{ fontSize: '0.5rem' }}></span>  Balance  ￡
                            <span style={{ fontSize: '0.3rem' }}>

                            </span>

                        </Grid.Item>
                    </Grid>
                </div>
            </div>
            <div style={{ display: iflogin ? 'none' : 'block' }}>
                <Loginfloat />
            </div>
            <div
                onClick={logout}
                style={{
                    width: '90%',
                    paddingLeft: '0.25rem',
                    marginTop: '0.5rem'
                }}>
                <Button color='danger' block >Log out</Button>
            </div>
        </div>
    )
}
