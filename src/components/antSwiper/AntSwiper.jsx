import { Swiper, Toast, } from 'antd-mobile'
import React from 'react'
//导入banner图片
import banner1 from '../../assets/pics/banner/banner1.png'
import banner2 from '../../assets/pics/banner/banner2.png'
import banner3 from '../../assets/pics/banner/banner3.png'
import banner4 from '../../assets/pics/banner/banner4.png'
import style from './style.module.css'
export default function AntSwiper() {

    const urls = [banner1, banner2, banner3, banner4]

    const items = urls.map((url, index) => (
        <Swiper.Item key={index}>
            <img
                src={url}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '5.5rem',
                    verticalAlign: 'top'
                }}
                className={style.content}
                onClick={() => {
                    Toast.show(`You click the card ${index + 1}`)
                }}
            />
        </Swiper.Item >
    ))
    return (
        <div>
            <Swiper loop autoplay autoplayInterval={3000}
                //展示 1/4 
                indicator={(total, current) => (
                    <div
                        style={{
                            position: 'absolute',
                            top: '0.2rem',
                            right: '0.2rem',
                            color: 'white',
                            fontSize: '0.3rem'
                        }}>
                        {`${current + 1} / ${total}`}
                    </div>
                )}>
                {items}

            </Swiper>
        </div>
    )
}
