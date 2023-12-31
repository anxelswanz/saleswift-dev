import { Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Life from '../pages/life/Life'
import About from '../pages/about/About'
import Shop from '../pages/shop/Shop'
import Layout from '../pages/layout/Layout'
import City from '../pages/city/City'
import Search from '../pages/search/Search'
import Detail from '../pages/detail/Detail'
import Login from '../pages/login/Login'
import PasswordInput from '../components/passwordInput/PasswordInput'
import Post from '../pages/post/Post'
import Choose from '../pages/post/component/choose/Choose'
import Category from '../pages/category/Category'
import ShowCategory from '../pages/category/components/showCategory/ShowCategory'
import Followers from '../pages/about/components/Followers'
import Following from '../pages/about/components/Following'
import ShowFav from '../pages/about/components/showFav/ShowFav'
import ShowPost from '../pages/about/components/showPost/ShowPost'
import Order from '../pages/order/Order'
import MakePayment from '../pages/order/components/makePayment/MakePayment'
import Successful from '../pages/order/components/successful/Successful'
import Purchase from '../pages/about/components/showPurchase/showPurchase'
import Topup from '../pages/about/components/topup/Topup'
const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },

            {
                path: 'about',
                element: <About />
            },
            {
                path: 'life',
                element: <Life />
            },
            {
                path: 'shop',
                element: <Shop />
            }
        ]
    }, {
        path: '/city',
        element: <City />
    }, {
        path: '/search',
        element: <Search />
    }, {
        path: '/detail',
        element: <Detail />
    }, {
        path: '/login',
        element: <Login />
    }, {
        path: '/passwordInput',
        element: <PasswordInput />
    },
    {
        path: '/post',
        element: <Post />
    },
    {
        path: '/choose',
        element: <Choose />
    },
    {
        path: '/category',
        element: <Category />
    }, {
        path: '/showCat',
        element: <ShowCategory />
    },
    {
        path: '/followers',
        element: <Followers />
    }, {
        path: '/following',
        element: <Following />
    }, {
        path: '/showFav',
        element: <ShowFav />
    }, {
        path: '/showPost',
        element: <ShowPost />
    },
    {
        path: '/order',
        element: <Order />
    },
    {
        path: '/makePayment',
        element: <MakePayment />
    },
    {
        path: '/successful',
        element: <Successful />
    },
    {
        path: '/purchase',
        element: <Purchase />
    },
    {
        path: '/topup',
        element: <Topup />
    }
]

export default routes