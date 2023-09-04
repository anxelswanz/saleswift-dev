import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    AppOutline,
    AppstoreOutline,
    ShopbagOutline,
    UserOutline,
} from 'antd-mobile-icons'

//TabBar变量
const tabs = [
    {
        key: '/home',
        title: 'Home',
        icon: <AppOutline />,
        badge: Badge.dot,
    },
    {
        key: '/category',
        title: 'Shop',
        icon: <ShopbagOutline />,
        badge: '5',
    },
    {
        key: '/life',
        title: 'Life Service',
        icon: <AppstoreOutline />,
        badge: '99+',
    },
    {
        key: '/about',
        title: 'Me',
        icon: <UserOutline />,
    },
]




export default function Footer() {

    //获取地址栏信息
    const location = useLocation();
    console.log(location);

    //useState - activeKey
    const [activeKey, setActiveKey] = useState('home')

    //获取路由
    const navigate = useNavigate();

    //onChange函数 - 改变高亮
    function changeTab(key) {
        console.log('key', key);
        //更改Key
        setActiveKey(key)
        //进行路由跳转
        navigate(key)
        //测试
        console.log('activekey=>', activeKey);
    }

    return (
        <div style={{ backgroundColor: 'white', position: 'fixed', bottom: '0', width: '100%', borderTop: '1px solid #eee' }}>
            <TabBar activeKey={activeKey} onChange={changeTab}>
                {tabs.map(item => (
                    <TabBar.Item
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                        badge={item.badge}
                    />
                ))}
            </TabBar>
        </div>
    )
}
