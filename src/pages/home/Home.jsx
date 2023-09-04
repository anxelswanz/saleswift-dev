import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import style from './style.module.css'
import { NavLink } from 'react-router-dom';
import '../../assets/css/iconfont.css';
import api from '../../api';
import Swiper from '../../components/antSwiper/AntSwiper'
import Recommend from './component/recommend/Recommend';
import Category from './component/category/Category';
import { Toast } from 'antd-mobile';
import { SmileFill } from 'antd-mobile-icons';
import LoginFloat from './../../components/loginfloat/Loginfloat'
export default function Home() {

    const location = useLocation();

    const [search, setsearch] = useSearchParams()
    //city 用来接收 City组件传过来的参数城市
    const [city, setCity] = useState('Choose city')

    //ref 用于接收input数据
    const searchRef = React.useRef()

    //路由
    const navigate = useNavigate();

    //user信息 用来判断登陆状态
    const [user, setUser] = useState({})
    //判断是否登录 默认为false
    const [iflogin, setIflogin] = useState(false)
    useEffect(() => {

        //查看是否登陆状态
        const flag = localStorage.getItem('iflogin')
        let iftrue = false;
        flag === 'true' ? iftrue = true : iftrue = false;
        console.log(typeof iftrue, iftrue);
        setIflogin(iftrue)



        let receiveduser = localStorage.getItem('user');
        let userObj = {};
        if (receiveduser !== null && receiveduser !== '') {
            userObj = JSON.parse(receiveduser);
            setUser(receiveduser)
        }

        if (iflogin && search.get('justLogin')) {
            let nickname = userObj.name;
            let userid = userObj.userid;
            //欢迎弹窗
            Toast.show({
                content: `Welcome! ${nickname}`,
                icon: <SmileFill />,
                duration: 2000
            })
        }
        // api.getList().then(res => {
        //     console.log(res.data);
        // })
        //Search接受参数并且进行setState赋值
        const getCity = search.get('city')
        if (getCity !== null) {
            setCity(getCity);
        }

    }, [user, city, iflogin])

    //手动搜索
    function searchGoods() {
        const query = searchRef.current.value
        console.log('query=>', query);
        navigate(`/search?query=${query}`)
    }
    //键盘事件
    function getKey(e) {
        if (e.keyCode === 13) {
            const query = searchRef.current.value
            console.log('query=>', query);
            navigate(`/search?query=${query}`)
        }
    }

    return (
        <>
            {/* 搜索栏Header */}
            <div className={style.header}>
                <div className={style.location}>
                    <NavLink to='/city'>
                        {city}<span className='iconfont icon-xiangxia'></span>
                    </NavLink>
                </div>
                <div className={style.center}>
                    <input ref={searchRef} onKeyUp={getKey} type='text' placeholder='Welcome to Saleswift' />
                </div>
                <div className={style.search} onClick={searchGoods}>
                    <span className='iconfont icon-sousuo'></span>
                </div>
            </div>
            {/* banner */}
            <div>
                <Swiper />
            </div>
            {/* Category */}
            <Category />
            {/* Recommend */}
            <Recommend />
            {/* login float */}

            <div style={{ display: iflogin ? 'none' : 'block' }}>
                <LoginFloat />
            </div>

        </>

    )
}
