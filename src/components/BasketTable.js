// import React, { useEffect, useState } from 'react';
// import basketService from '../services/BasketService';
// import { Table, Empty, Spin, Button } from 'antd';
// import userService from '../services/UserService';

// export default function BasketTable() {

//   const [cars, setCars] = useState([]);
//   const [basketId, setBasketId] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     (async function getBasket() {
//       try {
//         const data = await basketService.getBasket();
//         console.log(data)
//         setCars(data.basket.cars);
//         setBasketId(data.id);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//       }
//     })();
//   }, []);

//   const handleDelete = async (carId) => {
//     try {
//         setIsLoading(true);
//         await basketService.deleteBasket(basketId, carId);
//         setCars(cars => cars.filter(item => item.id !== carId));
//         setIsLoading(false);
//         // toast.success(`Машина ${basket.cars.model.model} успешно удалена из корзины`);
//     } catch (error) {
//         setIsLoading(false);
//         // toast.error(`Не удалось удалить машину из корзины: ${basket.cars.model.model}`);
//     }
//   };

  
//   const columns = [
//     {
//       title: 'id',
//       dataIndex: 'id',
//       key: 'id',
//     },
//     {
//       title: 'Бренд',
//       dataIndex: ['model', 'brand', 'brand'],
//       key: 'brand',
//     },
//     {
//       title: 'Модель',
//       dataIndex:['model', 'model'],
//       key: 'model',
//     },
//     {
//       title: 'Год выпуска',
//       dataIndex: 'productionYear',
//       key: 'productionYear',
//     },
//     {
//       title: 'Цена',
//       dataIndex: 'amount',
//       key: 'amount',
//     },
//     {
//       title: 'Пробег',
//       dataIndex: 'mileage',
//       key: 'mileage',
//     },
//     {
//         title: 'Тип топлива',
//         dataIndex: ['fuelType', 'fuelType'],
//         key: 'fuelType',
        
//     },
//     {
//         title: 'Объем двигателя',
//         dataIndex: ['engineVolume', 'engineVolume'],
//         key: 'engineVolume',
        
//     },
//     {
//       title: 'Действия',
//       key: 'actions',
//       render: (text, record) => (
//           <>
//               <Button danger type="text" onClick={() => handleDelete(record.id)}>
//                   Удалить
//               </Button>
//           </>
//       ),}

//   ];

//   return (
//     <>
//       {isLoading ? (
//         <Spin />
//       ) : cars.length > 0 ? (
//         <Table dataSource={cars} columns={columns} pagination={{ pageSize: 5 }} />
//       ) : (
//         <Empty description="Список автомобилей пуст" />
//       )}
//     </>
//   );
// }



import React, { useEffect, useState } from 'react';
import basketService from '../services/BasketService';
import { Table, Empty, Spin, Button } from 'antd';
import userService from '../services/UserService';

export default function BasketTable() {

  const [cars, setCars] = useState([]);

  const [basket, setBasket] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [basketId, setBasketId] = useState(``);


  useEffect(() => {
    (async function getBasket() {
      try {
        const data = await basketService.getBasket();
        console.log(data)
        setCars(data.cars);
        // setBasketId(userService.getId);
        // console.log(data.id);

        setIsLoading(false);
        // console.log(basketId);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (carId) => {
    try {
        // console.log(carId, basketId);
        await basketService.deleteBasket(carId);
        setCars(cars => cars.filter(item => item.carId !== carId));
        window.location.reload();
        // toast.success(`Машина ${basket.cars.model.model} успешно удалёна из карзины`);
    } catch (error) {
        // toast.error(`Не удалось удалить машину из корзины: ${basket.cars.model.model}`);
    }
};


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
    {
      title: 'Действия',
      key: 'actions',
      render: (text, record) => (
          <>
              <Button danger type="text" onClick={() => handleDelete(record.id)}>
                  Удалить
              </Button>
          </>
      ),}

  ];

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : cars.length > 0 ? (
        <Table dataSource={cars} columns={columns} pagination={{pageSize:5}} />
      ) : (
        <Empty description="Список автомобилей пуст" />
      )}
    </>
  );
}