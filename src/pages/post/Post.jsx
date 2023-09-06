import { Space, Button, Input, ImageUploader, Dropdown, Radio, TextArea, Toast } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import React, { useEffect, useState, useRef } from 'react'
import style from './style.module.css'
import Choose from './component/choose/Choose'
import api from '../../api'
import FormData from 'form-data'
import { useNavigate } from 'react-router-dom'
import res from 'antd-mobile-icons/es/AaOutline'
import qs from 'qs'

export default function Post(props) {

    const navigate = useNavigate();

    const myName = useRef();
    const myDescript = useRef();
    const myPrice = useRef();
    useEffect(() => {
        console.log('name', myName.current.value);
        console.log('description', myDescript.current.value);
        console.log('filepath=>' + filePath);
        console.log('radio => ' + category);
        console.log('myPrice => ' + price);
        console.log('address', address);
    })
    const [name, setName] = useState('');
    const [descript, setDescript] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [myCity, setMyCity] = useState('');
    const [address, setAddress] = useState('');

    //图片上传
    const [fileList, setFileList] = useState([])
    const [filePath, setFilePath] = useState([])
    async function mockUpload(file) {
        console.log('file', file);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', 'file1');
        console.log('formdata:', formData);
        let res = await api.uploadPhoto(formData)
        let path = res.data.obj;
        console.log('path=>', path);
        //将返回的最终路径加入到数组里
        setFilePath(() => {
            filePath.push(path);
            return [...filePath];
        });

        return {
            url: URL.createObjectURL(file),
        }
    }

    // 子组件回调父组件 传递city值
    const city = (data) => {
        console.log('city name =>' + data);
        setMyCity(data);
    }

    //返回
    function back() {
        navigate(-1)
    }

    //提交

    async function submit() {

        //校验
        if (name === '' || price === '' || address === '' || myCity === '' || descript === '' || category === '') {
            console.log('complete:', ifcomplete);
            setIfcomplete(false)
            return;
        }

        //如果都完成就设置为true
        setIfcomplete(true)

        //获取userid 
        const userJSON = localStorage.getItem('user');
        const userObj = JSON.parse(userJSON)
        const userId = userObj.userId
        const username = userObj.name;
        //转换price
        const priceFloat = Number.parseFloat(price)
        const obj = {
            "name": name,
            "price": priceFloat,
            "address": address,
            "city": myCity,
            "filepath": filePath + "",
            "description": descript,
            "userId": userId,
            "category": category,
            "username": username,
        }

        try {
            let res = await api.saveItem(obj)
            console.log(res);
            navigate('/home')
        } catch {
            console.log(res);
        }

    }
    //控制提交是否完成
    const [ifcomplete, setIfcomplete] = useState(true)
    return (
        <div className={style.bodybox}>
            {/* 取消 发布 */}
            <div className={style.header}>
                <Space direction='horizontal' style={{ '--gap-horizontal': '4.2rem' }}>
                    <LeftOutline onClick={back} style={{ fontWeight: '700', fontSize: '0.5rem' }} />
                    <div className={style.postbuttom} onClick={submit}>
                        Post
                    </div>
                    <div className={style.right} onClick={submit}></div>
                    <div className={style.left} onClick={submit}></div>
                </Space>
            </div>
            <div style={{
                backgroundColor: 'red',
                color: 'white',
                display: ifcomplete ? 'none' : 'block',
                height: '0.8rem',
                textAlign: 'center',
                lineHeight: '0.8rem',
                fontSize: '0.3rem',
                marginTop: '0.4rem'
            }}>
                Please fill out all the blanks before you submit
            </div>
            {/* 名字 */}
            <div className={style.name}>
                <div className={style.title}>
                    <span style={{ color: 'red' }}>*</span> &nbsp;  Item Name
                </div>
                <input
                    ref={myName}
                    placeholder='Please type the name of the item'
                    style={{
                        display: 'flex',
                        color: 'white',
                        backgroundColor: '#032654',
                        fontSize: '0.4rem',
                        boxSizing: 'border-box',
                        paddingLeft: '0.6rem',
                        marginTop: '0.4rem'
                    }}
                    defaultValue=''
                    onBlur={() => { setName(myName.current.value) }}
                />
            </div>
            {/* 文字 */}
            <div className={style.title}>
                <span style={{ color: 'red' }}>*</span> &nbsp; Your description
            </div>
            <div className={style.inputcomment}>
                <textarea className={style.texta}
                    style={{
                        /* 去除边框 */
                        border: 'none',
                        resize: 'none',
                        /* 去除选中后的边框 */
                        outline: 'none',
                        backgroundColor: '#032654',
                        color: 'white',
                        fontSize: '0.4rem',
                    }}
                    ref={myDescript}
                    onBlur={() => { setDescript(myDescript.current.value) }}
                    placeholder='Please leave your description of your item'
                    name="" id="" cols="30" rows="3"></textarea>
            </div>
            {/* 上传图片 */}
            <div className={style.title}>
                <span style={{ color: 'red' }}>*</span> &nbsp;     Upload Photos
            </div>
            <div className={style.uploadImage}>
                <ImageUploader
                    upload={mockUpload}
                    value={fileList}
                    onChange={setFileList}
                />
            </div>
            {/* 分类 */}
            <div className={style.title}>
                <span style={{ color: 'red' }}>*</span> &nbsp;     Please choose category
            </div>
            <div className={style.category}>
                <Dropdown>
                    <Dropdown.Item key='sorter' title='Category'>
                        <div style={{ padding: 12 }}>
                            <Radio.Group defaultValue='default' onChange={(val) => { setCategory(val) }}>
                                <Space direction='vertical' block>
                                    <Radio block value='furniture' onChange={(v) => { console.log(v); }}>
                                        Furniture
                                    </Radio>
                                    <Radio block value='bed'>
                                        Bed
                                    </Radio>
                                    <Radio block value='sofa'>
                                        Sofa
                                    </Radio>
                                    <Radio block value='cutlery'>
                                        Cutlery
                                    </Radio>
                                    <Radio block value='lamp'>
                                        Lamp
                                    </Radio>
                                    <Radio block value='wardrobe'>
                                        Wardrobe
                                    </Radio>
                                    <Radio block value='clothes'>
                                        Clothes
                                    </Radio>
                                    <Radio block value='baby'>
                                        Baby
                                    </Radio>
                                    <Radio block value='tables'>
                                        Tables
                                    </Radio>

                                </Space>
                            </Radio.Group>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
            </div>
            {/* 价格 */}
            <div className={style.title}>
                <span style={{ color: 'red' }}>*</span> &nbsp;     Set the price
            </div>
            <div style={{ color: 'white', fontSize: '0.4rem', paddingLeft: '0.6rem', }}>
                ￡ <input
                    ref={myPrice}
                    onBlur={() => { setPrice(myPrice.current.value) }}
                    placeholder='Please type the price number'
                    style={{
                        color: 'white',
                        backgroundColor: '#032654',
                        fontSize: '0.4rem',
                        boxSizing: 'border-box',

                        marginTop: '0.4rem',
                        display: 'inline-block',
                        width: '70%'
                    }}
                />
            </div>

            {/* 位置 */}
            <div className={style.title}>
                <span style={{ color: 'red' }}>*</span> &nbsp;     Please choose your city
            </div>
            <Choose city={city} />
            {/* 位置详情 */}
            <div className={style.title}>
                <span style={{ color: 'red' }}>*</span> &nbsp; Your detailed adress
            </div>
            <div style={{
                paddingLeft: '0.4rem',
                width: '90%'
            }}>
                <TextArea
                    onChange={(v) => { setAddress(v) }}
                    placeholder='Please type your detailed adress'
                    style={{
                        '--color': 'white',
                    }}
                    maxLength={100}
                />
            </div>
        </div >

    )
}
