## 1 项目安装依赖
npm i react-router-dom
npm i sass -S
npm i axios -S
npm i antd-mobile -S
npm i @reduxjs/toolkit react-redux -S
npm i swiper
npm i querystring -S
npm i http-proxy-middleware -S
## 2 项目初始化
1. css初始化
2. 移动端适配
/*css 初始化*/
* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

img {
    vertical-align: middle;
}

/* 移动端适配
   vw / vh 布局 */
html {
    /* 100/750*100 */
    font-size: 13.333333vw;
}

@media(min-width:750px) {
    html {
        font-size: 100px;
    }
}

/* 给body设置字体大小, 否则导致字体特别大*/
body {
    font-size: 12px;
}
3. 导入字体图标
3.1 第一种引入
//at.alicdn.com/t/c/font_4221745_7n3ze23e0cy.css
3.2 第二种引入
@import url('//at.alicdn.com/t/c/font_4221745_7n3ze23e0cy.css');

## 3 mock.js 
功能：模拟接口



## 4 首页
