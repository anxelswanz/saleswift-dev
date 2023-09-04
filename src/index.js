import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './assets/css/base.css'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
//路由包裹容器
// import './assets/css/iconfont.css'
ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
) 