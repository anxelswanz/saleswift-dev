import { Swiper, Toast, Grid, Space } from 'antd-mobile'
import React, { useState } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

export default function Category() {
    const navigate = useNavigate()

    return (

        <div>
            {/* 分类标题 */}
            <div className={style.header}>
                Category
            </div>
            <Swiper>
                <Swiper.Item>
                    <div className={style.itembox} >
                        <Grid columns={4} gap={64}>
                            <Grid.Item >
                                <Space direction='vertical' >
                                    <span className='iconfont icon-jiaju- item'
                                        onClick={() => {
                                            navigate('/category?value=furniture')
                                        }}></span>
                                    <span className={style.itemtext}>Furniture</span>
                                </Space>
                            </Grid.Item>
                            <Grid.Item>
                                <Space direction='vertical'>
                                    <span className='iconfont icon-canju item'></span>
                                    <span className={style.itemtext}>Cutlery</span>
                                </Space>
                            </Grid.Item>
                            <Grid.Item>
                                <Space direction='vertical'>
                                    <span className='iconfont icon-chuang item'></span>
                                    <span className={style.itemtext}>Bed</span>
                                </Space>
                            </Grid.Item>
                            <Grid.Item>
                                <Space direction='vertical'>
                                    <span className='iconfont icon-changxiuyuanlingshan item'></span>
                                    <span className={style.itemtext}>Clothes</span>
                                </Space>
                            </Grid.Item>
                        </Grid>
                    </div>
                </Swiper.Item >
                <Swiper.Item>
                    <div className={style.itembox} >
                        <Grid columns={4} gap={64}>
                            <Grid.Item>
                                <Space direction='vertical'>
                                    <span className='iconfont icon-shinei_ditan02 item'></span>
                                    <span className={style.itemtext}>Carpet</span>
                                </Space>
                            </Grid.Item>
                            <Grid.Item>
                                <Space direction='vertical'>
                                    <span className='iconfont icon-icon-test item'></span>
                                    <span className={style.itemtext}>Lamp</span>
                                </Space>
                            </Grid.Item>
                            <Grid.Item>
                                <Space direction='vertical'>
                                    <span className='iconfont icon-shouye item'></span>
                                    <span className={style.itemtext}>Babies</span>
                                </Space>
                            </Grid.Item>
                            <Grid.Item>
                                <Space direction='vertical'>
                                    <span className='iconfont icon-yigui item'></span>
                                    <span className={style.itemtext}>Wardrobe</span>
                                </Space>
                            </Grid.Item>
                        </Grid>
                    </div>
                </Swiper.Item >
            </Swiper>
        </div >
    )
}
