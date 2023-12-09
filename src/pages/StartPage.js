import { Button, Form, Select, message, InputNumber, DatePicker, Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import FormForFilter from '../components/FormForFilter';
import Header from '../components/Header';
import carService from '../services/CarServise';
import "../css/index.css";
import { Card } from 'antd';
const { Meta } = Card;


export default function StartPage() {
    const [cars, setCars] = useState([]);
    const [isQueryComplete, setIsQueryComplete] = useState(false); // Добавлено новое состояние

    const filtait = (value) => {
        setIsQueryComplete(false); // Сброс флага перед выполнением запроса
    
        if (value && value.selectBrand) { // Проверка наличия свойства 'selectBrand'
            carService.filtr(value)
                .then(cars => {
                    setCars(cars);
                    setIsQueryComplete(true); // Установка флага после получения ответа
                    console.log(cars);
                });
        } else {
            // Обработка случая, когда свойство 'selectBrand' отсутствует
            console.log("Ошибка: свойство 'selectBrand' отсутствует в объекте value");
        }
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
                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}