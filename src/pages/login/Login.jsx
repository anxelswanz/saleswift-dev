import React, { useEffect } from 'react'
import { Input, Form, Button, Toast, Divider, Space } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { useState } from 'react'
import styles from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux' // 引入react-redux 使用
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import MyHeader from '../../components/header/MyHeader'

export default function Login(props) {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let obj = { username: username, password: password };

    useEffect(() => {
        console.log('username=>', username);
        console.log('password=>', password);

    }, [username, password])



    function submit() {
        if (username === '' || password === '') {
            Toast.show({
                icon: 'fail',
                content: 'Please type the username or password'
            })
            return;
        }
        getData();
    }

    async function getData() {
        let res = await api.getUser({ username: username, password: password })
        console.log(res);
        if (res.data.code !== 200) {
            Toast.show({
                icon: 'fail',
                content: 'Wrong username or password'
            })
            return;
        }
        const user = res.data.obj
        console.log('user', user);
        user.password = '';
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('iflogin', true)
        navigate(`/home?justLogin=true`)
    }

    function back() {
        navigate('/home')
    }

    return (
        <div className={styles.login}>

            {/* 返回 */}
            <div >
                <span onClick={back} className='iconfont icon-fanhui back'
                    style={{
                        display: 'block',
                        position: 'absolute',
                        left: '0.2rem',
                        top: '0.5rem',
                        width: '0.8rem',
                        textAlign: 'center',
                        color: 'white'
                    }}></span>

            </div>
            <div className={styles.brand}>
                Saleswift
            </div>
            {/* 用户名密码 */}
            <div className={styles.loginbox}>
                <div className={styles.password}>
                    <Input placeholder='Please type your username'
                        onChange={Value => { setUsername(Value) }}
                        style={{
                            '--color': 'white',
                            paddingLeft: '0.8rem',
                        }} />
                </div>
                <div>
                    <div className={styles.password}>
                        <Input
                            onChange={Value => { setPassword(Value) }}
                            className={styles.input}
                            placeholder='Please type your password'
                            type={visible ? 'text' : 'password'}
                            style={{
                                '--color': 'white',
                                padding: '0.8rem'
                            }}
                        />
                        <div className={styles.eye}>
                            {!visible ? (
                                <EyeInvisibleOutline onClick={() => setVisible(true)} />
                            ) : (
                                <EyeOutline onClick={() => setVisible(false)} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* 登录按钮 */}
            <Button block color='primary' size='large'
                onClick={submit}
                style={{
                    marginLeft: '0.3rem',
                    marginRight: '0.2rem',
                    marginBottom: '0.8rem',
                    borderRadius: '2%',
                    boxSizing: 'border-box',
                    width: '92%',

                }} >Log in</Button>

            <Divider style={{
                width: '91%',
                marginLeft: '0.35rem'
            }}>Or</Divider>

            {/* 邮箱或者ins登录 */}
            <div style={{
                color: '#1194E2',
                textAlign: 'center',
                marginTop: '0.8rem',

            }}>
                <Space direction='vertical'>
                    <span className='iconfont icon-instagram'
                        style={{
                            fontSize: '0.3rem'
                        }}>  Login in by instagram </span>
                    <span className='iconfont icon-youxiang'
                        style={{
                            fontSize: '0.3rem'
                        }}>  Login in by your email</span>
                </Space>
            </div>
        </div>


    )
};

