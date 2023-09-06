import React, { useEffect } from 'react'
import { PasscodeInput, NumberKeyboard, Modal } from 'antd-mobile'
import style from './style.module.css'
import { useState } from 'react'
import api from '../../api'
import md5 from 'js-md5'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import MyHeader from '../header/MyHeader'
import res from 'antd-mobile-icons/es/AaOutline'

export default function PasswordInput() {

    const [search, setSearch] = useSearchParams();

    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const [code, setCode] = useState('');




    async function complete() {
        let userjson = localStorage.getItem('user');
        const user = JSON.parse(userjson);
        const encode = md5(code)
        console.log('encode', encode);
        console.log('user', user.userId);


        let ifTopup = false;
        ifTopup = search.get('ifTopup')

        if (ifTopup) {
            let money = search.get('money');
            api.topup({ userId: user.userId, topup: money }).then(response => {
                if (response.data.obj) {
                    Modal.alert({
                        content: `Top up ￡ ${money} successfully`,
                        confirmText: 'Okay',
                        onConfirm: () => {
                            api.getUserById({ userId: user.userId }).then(response => {
                                const newUser = response.data.obj;
                                localStorage.setItem('user', JSON.stringify(newUser));
                            })
                            navigate('/home')
                        }
                    })
                }
            })
        } else {
            let res = await api.verifycode({ userid: user.userId, code: encode })
            console.log(res);
            if (res.data.obj) {
                Modal.show({
                    content: 'Your balance: ' + user.balance,
                    closeOnAction: true,
                    actions: [
                        {
                            key: 'gotit',
                            text: 'Got it',
                            primary: true,
                        }],
                    afterClose: () => {
                        navigate('/about')
                    }
                })
            }
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
