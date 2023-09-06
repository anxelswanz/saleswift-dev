import React, { useEffect } from 'react'
import { PasscodeInput, NumberKeyboard, Modal, Toast } from 'antd-mobile'
import style from './style.module.css'
import { useState } from 'react'
import api from '../../../../api'
import md5 from 'js-md5'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import MyHeader from '../../../../components/header/MyHeader'
export default function MakePayment() {

    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const [code, setCode] = useState('');

    const [search, setSearch] = useSearchParams();

    const [price, setPrice] = useState('');
    const [itemId, setItemId] = useState('');

    const [limit, setLimit] = useState(3)

    const [time, setTime] = useState(0);
    useEffect(() => {
        const price = search.get('price');
        setPrice(price);
    })

    async function complete() {
        let userjson = localStorage.getItem('user');
        const user = JSON.parse(userjson);
        const encode = md5(code)
        console.log('encode', encode);
        //校验code
        let res = await api.verifycode({ userid: user.userId, code: encode })

        //如果验证码正确就开始生成订单
        if (res.data.obj) {
            //生成订单
            const itemId = search.get('itemId');
            setItemId(itemId);
            console.log('sads', user.userId);
            let ifCreate = await api.createOrder({ itemId: itemId, userId: user.userId });
            console.log(ifCreate);

            if (ifCreate.data.obj.code == 500) {
                Modal.show({
                    content: 'Payment unsuccessful',
                    closeOnAction: true,
                    actions: [
                        {
                            key: 'gotit',
                            text: 'Got it',
                            primary: true,
                        }],
                    afterClose: () => {
                        navigate('/unsuccessful')
                    }
                })
                window.location.reload() // 强制页面刷新
            }
            //讲order装入localstorage
            const order = ifCreate.data.obj;
            console.log(order);
            localStorage.setItem('order', JSON.stringify(order));
            if (ifCreate.data.obj) {
                Modal.show({
                    content: 'Paid successfully',
                    closeOnAction: true,
                    actions: [
                        {
                            key: 'gotit',
                            text: 'Got it',
                            primary: true,
                        }],
                    afterClose: () => {
                        navigate('/successful')
                    }
                })
            }
        } else {
            //如果不正确
            setTime(time => time + 1);
            if (time === 3) {
                Modal.show({
                    content: 'Sorry you have reached the limit of inputting the code',
                    closeOnAction: true,
                    actions: [
                        {
                            key: 'gotit',
                            text: 'Got it',
                            primary: true,
                        }],
                    afterClose: () => {
                        navigate('/home');
                    }
                })
            }
            Modal.show({
                content: 'Wrong Code (You can only input three times)',
                closeOnAction: true,
                actions: [
                    {
                        key: 'gotit',
                        text: 'Got it',
                        primary: true,
                    }]
            })
        }

    }

    return (
        <div className={style.boxbody}>
            <div>
                <MyHeader title={''} />
            </div>
            <div className={style.number}>
                <div class={style.brand}>
                    Salswift
                </div>
                <di style={{
                    fontSize: '0.5rem',
                    fontWeight: '700'
                }}>
                    ￡{price}
                </di>
                <span style={{
                    display: 'block',
                    color: 'black',
                    textAlign: 'center',
                    fontSize: '0.35rem',
                    fontWeight: '500',
                    paddingBottom: '0.3rem'
                }}>
                    Please type your PIN code
                </span>
                <PasscodeInput error={error} onChange={(value) => { setCode(value) }} onFill={complete} keyboard={<NumberKeyboard />} />
            </div>

        </div>
    )
}
