
import React, {useEffect, useState} from 'react';
import brandService from '../services/BrandsService';
import {Table, Empty, Button, Form, Input, Modal, Spin} from 'antd';
import {toast} from 'react-toastify';


export default function BrandsTable() {

    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [form] = Form.useForm();

    useEffect(() => {
        (async function getBrands() {
            try {
                const data = await brandService.getBrands();
                setBrands(data);
                setIsLoading(false);
                console.log(data);
            } catch (error) {
                setIsLoading(false);
            }
        })();
    }, []);



const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Бренд',
            dataIndex: 'brand',
            key: 'brand',
        },
        
       
    ];

    return (
        <>
       

            {isLoading ? (
                <Spin/>
            ) : brands.length > 0 ? (
                <Table dataSource={brands} columns={columns} pagination={false}/>
                
            ) : (
                <Empty description="Список брендов пуст"/>
            )}

           
        </>
    );

}