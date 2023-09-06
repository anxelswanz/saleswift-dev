import React, { useEffect } from 'react'
import { PasscodeInput, NumberKeyboard, Modal, Input, Button, Toast } from 'antd-mobile'
import style from './style.module.css'
import { useState } from 'react'
import api from '../../../../api'
import md5 from 'js-md5'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import MyHeader from '../../../../components/header/MyHeader'
export default function PasswordInput() {

    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const [code, setCode] = useState('');

    const [value, setValue] = useState('')

    const myRef = useRef();

    async function complete() {
        let userjson = localStorage.getItem('user');
        const user = JSON.parse(userjson);
        const encode = md5(code)
        console.log('encode', encode);
        console.log('user', user.userId);
        let res = await api.verifycode({ userid: user.userId, code: encode })
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



    return (
        <div className={style.boxbody}>
            <div>
                <MyHeader title={'Top up'} />
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
                    Please type the money:
                </span>

                <div style={{
                    height: '0.6rem',
                    display: 'flex',
                    fontSize: '0.4rem',
                    lineHeight: '0.6rem'
                }}>
                    ￡  <input
                        ref={myRef}
                        style={{
                            height: '0.6rem'
                        }}
                        placeholder='Please type the money'
                    />
                    &nbsp; &nbsp;
                    <Button color='success' onClick={() => {
                        const num = Number(myRef.current.value);
                        console.log(num);
                        if (myRef.current.value == '' || isNaN(num)) {
                            Toast.show({
                                content: 'Please type integers '
                            })
                            return;
                        }
                        Modal.confirm({
                            content: `Are you sure to Top up ￡ ${myRef.current.value} `,
                            confirmText: 'Yes',
                            cancelText: 'No',
                            onConfirm: () => {
                                navigate(`/passwordInput?money=${myRef.current.value}&ifTopup=true`)
                            }
                        })

                    }}>Submit</Button>
                </div>

                <div>

                </div>

            </div>

        </div>
    )
}
