import React, { Component } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/index'

export default function App() {

    const element = useRoutes(routes)
    return (
        <>
            {element}
        </>
    )
}

