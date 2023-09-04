import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import PostButtom from '../../components/postbuttom/PostButtom'

export default function Layout() {
    return (
        <div>
            <Outlet />
            <PostButtom />
            <Footer />
        </div>
    )
}
