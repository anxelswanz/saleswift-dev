import React from 'react'
import { Grid } from 'antd-mobile'
import Header from '../../../category/components/header/Header'
import style from './style.module.css'
export default function ShowFav() {



    return (
        <div>
            {/* header */}
            <Header title='My Favourite' />

            {/* nav */}
            <div>

            </div>
            {/* content */}
            <div className={style.content}>
                <Grid columns={2}>

                </Grid>
            </div>
        </div>
    )
}
