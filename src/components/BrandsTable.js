import React from 'react';
import brandsService from '../services/BrandsService';
import {Table, Button} from 'antd';

export default function BrandsTable() {

    // const data = brandsService.getBrands();
    const data = [
        {
            id: 1, 
            brand: 1
        },
        {
            id: 2,
            brand: 2
        }
    ]

    const columns = [
        {
            'title': 'id',
            'dataIndex': 'id',
            'key': 'id'
        },
        {
            'title': 'brand',
            'dataIndex': 'brand',
            'key': 'brand'
        }
    ]

    return (
        <>
            <p>table</p>
            <Table dataSource={data} columns={columns} />
            <Button>priv</Button>
        </>
    )

}