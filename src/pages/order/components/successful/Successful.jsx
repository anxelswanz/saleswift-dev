import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'


export default function Successful() {
    const navigate = useNavigate()

    function back() {
        localStorage.setItem('order', null);
        navigate('/home');
    }

    const [order, setOrder] = useState({})

    useEffect(() => {
        const order = localStorage.getItem('order');
        const orderObj = JSON.parse(order);
        setOrder(orderObj);
    }, [order])

    return (
        <div>
            {/* 顶部 */}
            <div className={style.back}>
                <span className='iconfont icon-fanhui'
                    onClick={back}
                    style={{
                        'position': 'absolute',
                        'left': '0.5rem',
                        'color': '#1677ff'
                    }}></span>
                <span style={{
                    'fontSize': '0.4rem',
                    fontWeight: '600',
                    position: 'absolute',
                    left: '1rem',
                    'color': '#1677ff'
                }}>Back to home page</span>
            </div>
            <div className={style.header}>
                <span className='iconfont icon-zhifuchenggong'></span>  You have paid successfully
            </div>

            <div className={style.priceInfo}>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>Item Name</span>
                    <span className={style.right}>{order.itemName}</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>Delivery Cost</span>
                    <span className={style.right}>0</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>Discount</span>
                    <span className={style.right}>- 0</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>Send Address</span>
                    <span className={style.right}> {order.sendAddress}</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>Receive Address</span>
                    <span className={style.right}> {order.receiveAddress}</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>User Name</span>
                    <span className={style.right}>{order.username}</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.right}>Total: ￡{order.totalPrice} </span>
                </div>

            </div>
        </div>
    )
}
