import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
export default function MyHeader(props) {
    const navigate = useNavigate();
    function back() {
        navigate(-1)
    }
    return (
        <div className={style.header}>
            <span onClick={back} className='iconfont icon-fanhui back'
                style={{
                    display: 'block',
                    position: 'relative',
                    left: '0.4rem',
                    width: '0.8rem',
                    textAlign: 'center'
                }}></span>
            <div className={style.title}>
                {props.title}
            </div>
        </div>

    )
}

MyHeader.defaultProps = {
    title: ''
}
