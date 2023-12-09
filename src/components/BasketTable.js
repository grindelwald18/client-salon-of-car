import React, { useEffect, useState } from 'react';
import basketService from '../services/BasketService';
import { Table, Empty, Spin } from 'antd';

export default function BasketTable() {
  const [basket, setBasket] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function getBasket() {
      try {
        const data = await basketService.getBasket();
        setBasket(data.cars);
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
      dataIndex: ['model', 'brand', 'brand'],
      key: 'brand',
    },
    {
      title: 'Модель',
      dataIndex:['model', 'model'],
      key: 'model',
    },
    {
      title: 'Год выпуска',
      dataIndex: 'productionYear',
      key: 'productionYear',
    },
    {
      title: 'Цена',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Пробег',
      dataIndex: 'mileage',
      key: 'mileage',
    },
    {
        title: 'Тип топлива',
        dataIndex: ['fuelType', 'fuelType'],
        key: 'fuelType',
        
    },
    {
        title: 'Объем двигателя',
        dataIndex: ['engineVolume', 'engineVolume'],
        key: 'engineVolume',
        
    },

  ];

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : basket.length > 0 ? (
        <Table dataSource={basket} columns={columns} pagination={{pageSize:5}} />
      ) : (
        <Empty description="Список автомобилей пуст" />
      )}
    </>
  );
}