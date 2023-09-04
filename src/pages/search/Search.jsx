import React, { useEffect, useState, useRef } from 'react'
import Header from '../../components/header/MyHeader'
import { useSearchParams, useNavigate } from 'react-router-dom'
import style from './style.module.css'
import SearchContent from '../../components/searchContent/SearchContent';
export default function Search() {
    //获取响应参数
    const [search, setSearch] = useSearchParams();
    const [value, setValue] = useState();
    const searchRef = useRef()
    useEffect(() => {
        //拿到路由传过来的值
        const a = search.get('query')
        setValue(a);
    })
    const navigate = useNavigate();
    function back() {
        navigate(-1)
    }

    function searchGoods() {
        console.log('@', searchRef.current.value);
    }

    //手动搜索
    function searchGoods() {
        const query = searchRef.current.value
        console.log('query=>', query);
        navigate(`/search?query=${query}`)
    }
    //键盘事件
    function getKey(e) {
        if (e.keyCode === 13) {
            const query = searchRef.current.value
            console.log('query=>', query);
            navigate(`/search?query=${query}`)
        }
    }

    function searchAsync() {
        const query = searchRef.current.value
        console.log('query=>', query);
        navigate(`/search?query=${query}`)
    }
    return (
        <>
            {/* 顶部 */}
            <div className={style.header}>
                <span onClick={back} className='iconfont icon-fanhui back'
                    style={{
                        display: 'block',
                        position: 'relative',
                        left: '0.07rem',
                        width: '0.8rem',
                        textAlign: 'center'
                    }}></span>
                <div className={style.center}>
                    <input ref={searchRef} onChange={searchAsync} onKeyUp={getKey} defaultValue={value} type='text' placeholder={value} />
                </div>
                <div onClick={searchGoods} className={style.search}>
                    <span className='iconfont icon-sousuo'></span>
                </div>
            </div>
            {/* 搜索内容 */}
            <SearchContent searchtitle={value} />
        </>
    )
}
