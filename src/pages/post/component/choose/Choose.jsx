import React, { useEffect, useState } from 'react'
import { Space, Button, SearchBar, Grid } from 'antd-mobile'
import { click } from '@testing-library/user-event/dist/click';

export default function Choose(props) {

    //城市Example
    const groups = [
        {
            initial: 'M',
            name: 'Manchester',
            cityCode: '00009'
        }, {
            initial: 'N',
            name: 'Newcastle',
            cityCode: '00010'
        }, {
            initial: 'N',
            name: 'Nottingham',
            cityCode: '00011'
        }, {
            initial: 'L',
            name: 'London',
            cityCode: '00012'
        }
        , {
            initial: 'E',
            name: 'Edingburg',
            cityCode: '00013'
        }
        , {
            initial: 'C',
            name: 'Cardiff',
            cityCode: '00014'
        }, {
            initial: 'B',
            name: 'Birmingham',
            cityCode: '00015'
        }
        , {
            initial: 'L',
            name: 'Liverpool',
            cityCode: '00016'
        }
        , {
            initial: 'G',
            name: 'Glasgow',
            cityCode: '00017'
        }
        , {
            initial: 'E',
            name: 'Essex',
            cityCode: '00018'
        },
        {
            initial: 'S',
            name: 'Sheffield',
            cityCode: '00019'
        },
        {
            initial: 'O',
            name: 'Oxford',
            cityCode: '00020'
        },
        {
            initial: 'C',
            name: 'Cambridge',
            cityCode: '00021'
        },
        {
            initial: 'B',
            name: 'Bristol',
            cityCode: '00022'
        },
    ]

    const [value, setValue] = useState('');
    const [datas, setDatas] = useState([]);
    const [city, setCity] = useState('');

    const filteredData = groups.filter((r) => {
        if (value === '') {
            return r;
        }
        return r.name.toLowerCase().includes(value.toLocaleLowerCase());
    })

    useEffect(() => {
    })

    function click(name) {
        props.city(name);
    }

    const items = filteredData.map((data, index) => {
        return <Grid.Item>
            <span
                style={{ color: 'white' }}
                onClick={() => { setCity(data.name); click(data.name) }}>{data.name}</span>
        </Grid.Item>
    })



    return (
        <div>
            <Space block direction='vertical'>
                <SearchBar showCancelButton placeholder='请输入内容'
                    style={{
                        width: '85%',
                        paddingLeft: '0.5rem',
                        marginTop: '0.3rem'
                    }}
                    onChange={(value) => { setValue(value) }} />
                <Space direction='vertical'
                    style={{
                        width: '85%',
                        paddingLeft: '0.5rem',
                        marginTop: '0.3rem'
                    }}>
                    <Grid columns={5} gap={1}
                    >
                        {items}
                    </Grid>
                    <div style={{ color: 'white', fontSize: '0.3rem' }}>
                        Your City: <span style={{ color: 'red' }}>{city}</span>
                    </div>
                </Space>
            </Space>
        </div>
    )
}
