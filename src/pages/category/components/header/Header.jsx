import React from 'react'
import { SearchBar, Space } from 'antd-mobile'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const navigate = useNavigate()
    function back() {
        navigate(-1)
    }
    return (
        <div>
            {/* header */}
            <div className={style.header} >
                <Space direction='horizontal'>
                    <span className='iconfont iconfont icon-fanhui back'
                        onClick={back}
                        style={{
                            color: '#1677ff',
                            fontSize: '0.4rem'
                        }}></span>
                    <SearchBar placeholder='Please Search'
                        style={{
                            paddingLeft: '0.4rem',
                            width: '5.8rem'
                        }} />
                </Space>
            </div>
        </div>
    )
}
