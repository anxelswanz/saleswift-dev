import React, { useEffect, useState } from 'react'
import { Grid, Space } from 'antd-mobile'
import style from './style.module.css'
import { StarOutline } from 'antd-mobile-icons';
//导入商品图片
import example1 from '../../assets/pics/recommend_goods_example/bed-1.png';
import example2 from '../../assets/pics/recommend_goods_example/bed-2.png'
import example3 from '../../assets/pics/recommend_goods_example/closet-1.png'
import example4 from '../../assets/pics/recommend_goods_example/lamp-1.png'
import example5 from '../../assets/pics/recommend_goods_example/sofa-1.png'
import example6 from '../../assets/pics/recommend_goods_example/vase-1.png'
import { isVisible } from '@testing-library/user-event/dist/utils';
import { useNavigate } from 'react-router-dom';
export default function SearchContent(props) {
    const navigate = useNavigate();

    //参数
    const { searchtitle } = props
    //推荐商品图片EXAMPLE
    const recommends = [{
        url: example1,
        name: 'Standard Bed',
        user: 'Ansel',
        goodsReleasDate: '2023-12-1',
        goodsId: '0001',
        price: 123.12,
        ifsale: false,
        category: 'funiture'
    }, {
        url: example2,
        name: 'Standard medium size Bed',
        user: 'Ansel',
        goodsReleasDate: '2023-12-1',
        goodsId: '0002',
        price: 115.12,
        ifsale: true,
        category: 'funiture'
    }, {
        url: example3,
        name: 'Fine closet ',
        user: 'Jamie',
        goodsReleasDate: '2023-12-2',
        goodsId: '0003',
        price: 100.00,
        ifsale: false,
        category: 'wardrobe'
    }, {
        url: example4,
        name: 'White Lamp from EKEA',
        user: 'Tommy',
        goodsReleasDate: '2023-12-23',
        goodsId: '0004',
        price: 12.12,
        ifsale: false,
        category: 'lamp'
    }, {
        url: example5,
        name: 'Classic Sofa',
        user: 'Laura',
        goodsReleasDate: '2023-12-22',
        goodsId: '0005',
        price: 41.12,
        ifsale: false,
        category: 'funiture'
    }, {
        url: example6,
        name: 'Vase',
        user: 'Ansel',
        goodsReleasDate: '2023-12-1',
        goodsId: '0006',
        price: 8,
        ifsale: false,
        category: 'pottery'
    }]

    //state参数:记录total数据
    const [total, setTotal] = useState(0)
    let count = 0;
    //过滤数据
    const filteredData = recommends.filter((r) => {
        if (searchtitle === '') {
            return r;
        }
        return r.name.toLowerCase().includes(searchtitle);
    });

    const [itemId, setItemId] = useState(0)
    useEffect(() => {
        console.log('@filteredData', filteredData);
        console.log('1', count);
        //讲count值赋给total
        setTotal(count)
        //用于跳转商品详情
        console.log('itemId', itemId);
        if (itemId !== 0) {
            navigate(`/detail?itemid=${itemId}`)
        }
    })
    //前往商品详情



    const items = filteredData.map((item, index) => {
        count = index + 1;
        console.log(item.name, item.ifsale);
        return <Grid.Item>
            <div className={style.container}>
                <div className={style.itemhead}>
                    <a><StarOutline /></a>  <span style={{ float: 'left', color: '#1677FF' }}>{item.user}</span>
                    <span style={{ float: 'right' }}>{item.goodsReleasDate}</span>
                </div>
                <img
                    onClick={() => { setItemId(item.goodsId) }}
                    src={item.url}
                    style={{
                        display: 'block',
                        width: '100%',
                        height: '3.6rem',
                        verticalAlign: 'top',
                        padding: '0.17rem',
                        boxSizing: 'border-box',
                        borderRadius: '25px',
                    }} />
                <span style={{
                    display: `${item.ifsale ? 'block' : 'none'}`,
                    position: 'absolute',
                    fontSize: '1rem',
                    color: 'red',
                    left: 0,
                    top: '0.7rem',
                }} className='iconfont icon-seld_out'></span>
                <div className={style.content}>
                    <span> {item.name}</span>  <br />
                    <span style={{ color: 'grey' }}> ￡{item.price} </span>
                </div>
            </div>
        </Grid.Item>
    })

    return (
        <div>
            <div className={style.header}>
                Results:{total}
            </div>
            <Grid columns={1}>
                {items}
            </Grid>
        </div>
    )
}
