import { Button, Form, Select, message, InputNumber, DatePicker, Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import FormForFilter from '../components/FormForFilter';
import BodyType from '../components/BodyType';
import Header from '../components/Header';
import carService from '../services/CarServise';
import basketService from '../services/BasketService';
import userService from '../services/UserService';
import "../css/index.css";
import { Card } from 'antd';
const { Meta } = Card;


export default function StartPage() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [isQueryComplete, setIsQueryComplete] = useState(false); // Добавлено новое состояние

    // const filtait = (value) => {
    //     setIsQueryComplete(false); // Сброс флага перед выполнением запроса
    
    //     if (value && value.selectBrand) { // Проверка наличия свойства 'selectBrand'
    //         carService.filtr(value)
    //             .then(cars => {
    //                 setCars(cars);
    //                 setIsQueryComplete(true); // Установка флага после получения ответа
    //                 console.log(cars);
    //             });
    //     } else {
    //         // Обработка случая, когда свойство 'selectBrand' отсутствует
    //         console.log("Ошибка: свойство 'selectBrand' отсутствует в объекте value");
    //     }
    // }
    const filtait = (value) => {
        setIsQueryComplete(false); // Сброс флага перед выполнением запроса
    
        if (value && (value.selectBrand || value.selectBodyType)) { // Проверка наличия свойств 'selectBrand' и 'selectBodyType'
            carService.filtr(value)
                .then(cars => {
                    setCars(cars);
                    setIsQueryComplete(true); // Установка флага после получения ответа
                    console.log(cars);
                });
        } else {
            // Обработка случая, когда свойство 'selectBrand' или 'selectBodyType' отсутствует
            console.log("Ошибка: свойство 'selectBrand' или 'selectBodyType' отсутствует в объекте value");
        }
    };
    const  handleOnSelectBodyType = async (bodyTypeId) =>{
        try {
            const filteredCars = await carService.filtrByBodyType(bodyTypeId);
            // console.log(filteredCars);
            setCars(filteredCars);

        } catch (error) {
            console.log(error);
        }
    }


    const addCartoBasket = (carId)=>{
       basketService.addCarBasket(carId);
    }

    useEffect(() => {
        filtait(); // Выполнение запроса при загрузке страницы
    }, []);

    return (
        <>
            <Header/>
            <section className='secrionFilrt'>
                <div className='container'>
                    <h1>Лучшее предложение</h1>
                    <FormForFilter onFilter={filtait} />
                    <BodyType onSelectBodyType={handleOnSelectBodyType} />
                    <div className='containerCard'>
                        {isQueryComplete && cars.length === 0 ? (
                            <div className="emptyContainer">
                                <Empty description="Нет машин с такими параметрами" />
                            </div>
                        ) : (
                            cars.map((car) => (
                                <Card 
                                    key={car.id}
                                    className='card'
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={<img alt="example" src="#" className='imgCard'/>}
                                >
                                    <Meta className="cardModelAndBrend" title={`${car.model.brand.brand} ${car.model.model}`} />
                                    <Meta title={`Цена: ${car.amount}$`} />
                                    <Meta title={`Пробег: ${car.mileage}км`} />
                                    <Meta title={`Год выпуска: ${car.productionYear}`} />
                                    <Meta title={`Тип кузова: ${car.bodyType.bodyType}`} />
                                    <Button type="primary" className='button' onClick={() => addCartoBasket(car.id)}>Добавить в корзину</Button>
                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}