import React, { useEffect, useState } from 'react'
import Header from '../../components/header/MyHeader'
import { useSearchParams } from 'react-router-dom'

//导入商品图片
import example1 from '../../assets/pics/recommend_goods_example/bed-1.png';
import example2 from '../../assets/pics/recommend_goods_example/bed-2.png'
import example3 from '../../assets/pics/recommend_goods_example/closet-1.png'
import example4 from '../../assets/pics/recommend_goods_example/lamp-1.png'
import example5 from '../../assets/pics/recommend_goods_example/sofa-1.png'
import example6 from '../../assets/pics/recommend_goods_example/vase-1.png'

//导入头像
import blackcat from '../../assets/pics/avatar/blackcat.png'
import Content from './components/ItemContent'
import api from '../../api';
export default function Detail() {

    //用于查找传递商品名称数据
    const [title, setTitle] = useState();
    const [obj, setObj] = useState({});
    const [search, setSearch] = useSearchParams();


    //推荐商品图片EXAMPLE
    const recommends = [{
        name: 'Standard Bed',
        user: 'Ansel',
        goodsReleasDate: '2023-12-1',
        itemId: '0001',
        price: 123.12,
        ifsale: false,
        category: 'funiture',
        filepath: example1,
        address: 'London Bridge Kings Rd 202',
        description: 'Looking for the perfect balance of comfort and economy? Consider our collection of used beds! Each bed is unique and contains its own story and warmth. These exciting second-hand beds are made of high quality materials, carefully selected and carefully checked to ensure a high quality sleep experience',
        userId: '000000001'
    }, {
        name: 'Standard medium size Bed',
        user: 'Ansel',
        goodsReleasDate: '2023-12-1',
        itemId: '0002',
        price: 115.12,
        ifsale: true,
        category: 'funiture',
        filepath: example2,
        address: 'Newcastle Leaze Parade 108',
        description: 'In our collection of used beds, each bed is a unique treasure waiting to find its own new owner. Let us help you find the perfect second hand bed to add beauty and comfort to your bedroom. Contact us today to move towards better sleep',
        userId: '000000001'
    }, {
        address: example3,
        name: 'Fine closet ',
        user: 'Jamie',
        goodsReleasDate: '2023-12-2',
        itemId: '0003',
        price: 100.00,
        ifsale: false,
        category: 'wardrobe',
        filepath: example3,
        address: 'London Bridge Kings Rd 202',
        description: 'good closet',
        userId: '000000001'
    }, {
        address: example4,
        name: 'White Lamp from EKEA',
        user: 'Tommy',
        goodsReleasDate: '2023-12-23',
        itemId: '0004',
        price: 12.12,
        ifsale: false,
        category: 'lamp',
        filepath: example4,
        address: 'London Bridge Kings Rd 202',
        description: 'good lamp',
        userId: '000000001'
    }, {
        address: example5,
        name: 'Classic Sofa',
        user: 'Laura',
        goodsReleasDate: '2023-12-22',
        itemId: '0005',
        price: 41.12,
        ifsale: false,
        category: 'funiture',
        filepath: example5,
        address: 'London Bridge Kings Rd 202',
        description: 'good Sofa',
        userId: '000000001'
    }, {
        address: example6,
        name: 'Vase',
        user: 'Ansel',
        address: 'London Bridge Kings Rd 202',
        goodsReleasDate: '2023-12-1',
        itemId: '0006',
        price: 8,
        ifsale: false,
        category: 'pottery',
        filepath: example6,
        description: 'good Vase',
        userId: '000000001'
    }]

    useEffect(() => {
        const id = search.get('itemid')
        console.log('id', id);
        const obj = getData(id)
    }, [])

    async function getData(id) {
        try {
            let res = await api.getItemByItemId({ itemId: id })
            console.log('res', res);
            const obj = res.data.obj;
            setTitle(obj.name);
            setObj(obj);
        } catch {
            console.log("catch");
            recommends.map((item) => {
                if (item.itemId === id) {
                    setTitle(item.name)
                    setObj(item)
                }
            })
        }
    }
    return (
        <div>
            <Header title={title} />
            <Content obj={obj} />
        </div>
    )
}
