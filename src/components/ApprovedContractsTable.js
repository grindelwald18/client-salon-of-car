
import React, { useEffect, useState } from 'react';
import { Table, Empty, message } from 'antd';
import contractService from '../services/ContractService';


export default function NotApprovedContractsTabel() {

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        (async function getContracts() {
            try {
                const data = await contractService.getApprovedContracts();
                setContracts(data);
                // setIsLoading(false);
                console.log(data);
            } catch (error) {
                // setIsLoading(false);
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
            dataIndex: ['car', 'model', 'brand','brand'],
            key: 'brand',
        },
        {
            title: 'Модель',
            dataIndex: ['car', 'model', 'model'],
            key: 'model',
        },
        {
            title: 'Пробег',
            dataIndex: ['car', 'mileage'],
            key: 'mileage',
        },
        {
            title: 'Цена',
            dataIndex: ['car', 'amount'],
            key: 'amount',
        },
        {
            title: 'Год выпуска',
            dataIndex: ['car', 'productionYear'],
            key: 'productionYear',
        },
        {
            title: 'Тип кузова',
            dataIndex: ['car', 'bodyType', 'bodyType'],
            key: 'bodyType',
        },
        {
            title: 'Заказчик',
            dataIndex: ['user', 'surname'],
            key: 'surname',
        },
        {
            title: 'Статус',
            dataIndex: ['status'],
            key: 'status',
        },


    ];

    return (
        <>

            { contracts.length > 0 ? (
                <Table dataSource={contracts} columns={columns} pagination={{pageSize:5}} />
            ) : (
                <Empty description="Контрактов нет" />
            )}
        </>
    );

}