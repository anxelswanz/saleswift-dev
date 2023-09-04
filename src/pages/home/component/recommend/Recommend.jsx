import { Grid, Space } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
//导入商品图片
import example1 from '../../../../assets/pics/recommend_goods_example/bed-1.png';
import example2 from '../../../../assets/pics/recommend_goods_example/bed-2.png'
import example3 from '../../../../assets/pics/recommend_goods_example/closet-1.png'
import example4 from '../../../../assets/pics/recommend_goods_example/lamp-1.png'
import example5 from '../../../../assets/pics/recommend_goods_example/sofa-1.png'
import example6 from '../../../../assets/pics/recommend_goods_example/vase-1.png'
export default function Recommend() {

    //获取路由
    const navigate = useNavigate();
    //用于跳转路由传递对象参数
    const [obj, setObj] = useState({});
    const [itemId, setItemId] = useState(0)

    useEffect(() => {
        if (itemId !== 0) {
            navigate(`/detail?itemid=${itemId}`)
        }
    }, [itemId])

    //推荐商品图片EXAMPLE
    const recommends = [{
        url: example1,
        name: 'Standard Bed',
        user: 'Ansel',
        goodsReleasDate: '2023-12-1',
        goodsId: '0001',
        price: 123.12,
        ifsale: false,
        category: 'funiture',
        url: example1,
        location: 'London Bridge Kings Rd 202',
        description: 'Looking for the perfect balance of comfort and economy? Consider our collection of used beds! Each bed is unique and contains its own story and warmth. These exciting second-hand beds are made of high quality materials, carefully selected and carefully checked to ensure a high quality sleep experience',
        userId: '000000001'
    }, {
        url: example2,
        name: 'Standard medium size Bed',
        user: 'Ansel',
        goodsReleasDate: '2023-12-1',
        goodsId: '0002',
        price: 115.12,
        ifsale: true,
        category: 'funiture',
        url: example2,
        location: 'Newcastle Leaze Parade 108',
        description: 'In our collection of used beds, each bed is a unique treasure waiting to find its own new owner. Let us help you find the perfect second hand bed to add beauty and comfort to your bedroom. Contact us today to move towards better sleep',
        userId: '000000001'
    }, {
        url: example3,
        name: 'Fine closet ',
        user: 'Jamie',
        goodsReleasDate: '2023-12-2',
        goodsId: '0003',
        price: 100.00,
        ifsale: false,
        category: 'wardrobe',
        url: example3,
        location: 'London Bridge Kings Rd 202',
        description: 'good closet',
        userId: '000000001'
    }, {
        url: example4,
        name: 'White Lamp from EKEA',
        user: 'Tommy',
        goodsReleasDate: '2023-12-23',
        goodsId: '0004',
        price: 12.12,
        ifsale: false,
        category: 'lamp',
        url: example4,
        location: 'London Bridge Kings Rd 202',
        description: 'good lamp',
        userId: '000000001'
    }, {
        url: example5,
        name: 'Classic Sofa',
        user: 'Laura',
        goodsReleasDate: '2023-12-22',
        goodsId: '0005',
        price: 41.12,
        ifsale: false,
        category: 'funiture',
        url: example5,
        location: 'London Bridge Kings Rd 202',
        description: 'good Sofa',
        userId: '000000001'
    }, {
        url: example6,
        name: 'Vase',
        user: 'Ansel',
        location: 'London Bridge Kings Rd 202',
        goodsReleasDate: '2023-12-1',
        goodsId: '0006',
        price: 8,
        ifsale: false,
        category: 'pottery',
        url: example6,
        description: 'good Vase',
        userId: '000000001'
    }]


    //推荐商品遍历
    const items = recommends.map((recommend, index) => {
        console.log(recommend.name);
        console.log(index);
        return <Grid.Item key={index}>
            <a style={{ position: 'relative' }} onClick={() => { setItemId(recommend.goodsId) }}>
                <img
                    style={{
                        display: 'block',
                        width: '100%',
                        height: '3.6rem',
                        verticalAlign: 'top',
                        padding: '0.17rem',
                        boxSizing: 'border-box',
                        borderRadius: '25px',
                    }}
                    src={recommend.url} />
                <span className={style.price}>￡{recommend.price}</span>
            </a>

            <div className={style.itemtext}>
                <a>
                    <span style={{
                        fontWeight: 'bolder',
                        fontSize: '0.3rem'
                    }}>
                        {recommend.name}
                    </span>  <br />
                </a>
                <Space style={{ '--gap': '1.5rem' }} justify='between'>
                    <a>
                        {recommend.user}
                    </a>
                    <span style={{
                        fontWeight: 'bolder',
                    }}>
                        {recommend.goodsReleasDate}
                    </span>
                </Space>
            </div>
        </Grid.Item >
    })

    return (
        <div >
            {/* 推荐标题 */}
            <div className={style.header}>
                Recommend
            </div>
            {/* 内容 */}
            <Grid columns={2} gap={8}>
                {items}
            </Grid>
        </div>
    )
}
