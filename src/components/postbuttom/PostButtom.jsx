import React from 'react'
import style from './style.module.css'
import { FloatingBubble } from 'antd-mobile'
import { AddCircleOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
export default function PostButtom() {

    const navigate = useNavigate();
    function post() {
        navigate('/post')
    }

    return (
        <div>
            <FloatingBubble
                style={{
                    '--initial-position-bottom': '1.6rem',
                    '--initial-position-right': '0.7rem',
                    '--edge-distance': '24px',
                }}
            >
                <AddCircleOutline fontSize={32} onClick={post} />
            </FloatingBubble>
        </div>
    )
}
