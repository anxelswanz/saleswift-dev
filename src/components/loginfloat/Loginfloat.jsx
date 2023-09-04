import React from 'react'
import style from './style.module.css'
import { Grid, Space } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
export default function Loginfloat() {

    const navigate = useNavigate()

    function login() {
        navigate('/login')
    }

    return (
        <div>
            <div className={style.box}>
                <Grid columns={2}>
                    <Grid.Item
                    >
                        <Space direction='vertical'
                            style={{
                                '--gap-vertical': '0px',
                                paddingTop: '0.6rem',

                            }}>
                            <span
                                style={{
                                    color: 'white',
                                    fontSize: '0.3rem',
                                    paddingLeft: '0.3rem',

                                }}>Hello! welcome to</span>
                            <span
                                style={{
                                    color: 'white',
                                    fontSize: '0.45rem',
                                    paddingLeft: '0.3rem',
                                    opacity: 0.9,

                                }} className={style.brand}> Saleswift</span>
                        </Space>

                    </Grid.Item>
                    <Grid.Item>
                        <div className={style.login} onClick={login}>
                            <span className='iconfont icon-tuichudenglu' style={{
                                fontSize: '0.4rem'
                            }}>   Please Login</span>
                        </div>
                    </Grid.Item>
                </Grid>
            </div>
        </div >
    )
}
