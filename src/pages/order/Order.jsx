import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { Space, Grid, Image } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate, useSearchParams } from 'react-router-dom'
import api from '../../api'

export default function Order() {

    const navigate = useNavigate();
    const [search, setSearch] = useSearchParams();


    //定义obj存储商品信息
    const [obj, setObj] = useState({});
    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const itemId = search.get('itemId');
        let res = await api.getItemByItemId({ itemId: itemId });
        setObj(res.data.obj)
        console.log('obj', obj);
    }

    //回退
    function back() {
        navigate(-1);
    }


    function makePayment() {
        navigate(`/makePayment?price=${obj.price}&itemId=${obj.itemId}`)
    }

    return (
        <div className={style.box}>
            {/* 顶部 */}
            <div className={style.header}>
                <span className='iconfont icon-fanhui'
                    onClick={back}
                    style={{
                        'position': 'absolute',
                        'left': '0.5rem',
                        'color': '#1677ff'
                    }}></span>
                <span style={{
                    'fontSize': '0.4rem',
                    fontWeight: '600'
                }}>Your order</span>
            </div>
            {/* 商品信息 */}
            <div className={style.itemInfo}>
                <Space>
                    <div className={style.imgbox}>
                        <Image
                            src={obj.filepath}
                        />
                    </div>
                    <div className={style.itemInfoText}>
                        <Space direction='vertical'>
                            <span>{obj.name}</span>
                            <span style={{
                                fontSize: '0.3rem',
                                fontWeight: '600'
                            }}>￡ {obj.price}</span>
                            <span>Whether to promise a refund: Yes</span>
                        </Space>
                    </div>
                </Space>
            </div>
            {/* 费用信息 */}
            <div className={style.priceInfo}>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>Item price</span>
                    <span className={style.right}>￡ {obj.price}</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>Delivery Cost</span>
                    <span className={style.right}>0</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.left}>Discount</span>
                    <span className={style.right}>- 0</span>
                </div>
                <div className={style.priceInfoItem}>
                    <span className={style.right}>Total: ￡ {obj.price}</span>
                </div>
            </div>
            {/* 付款 */}
            <div className={style.pay}>

                <Grid columns={2}>
                    <Grid.Item style={{
                        textAlign: 'center',
                    }}>
                        <span style={{
                            fontWeight: '700',
                            fontSize: '0.7rem',
                            lineHeight: '1.7rem',
                        }}>
                            ￡ {obj.price}
                        </span>
                    </Grid.Item>
                    <Grid.Item>
                        <div className={style.postbuttom} onClick={makePayment}>
                            Submit
                        </div>
                        <div className={style.rightButton}></div>
                        <div className={style.leftButton}></div>
                    </Grid.Item>
                </Grid>

            </div>
        </div>
    )
}
