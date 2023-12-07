import { Button, Form, Select, message, InputNumber, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import FormForFilter from '../components/FormForFilter';
import carService from '../services/CarServise';
import { Card } from 'antd';
const { Meta } = Card;


export default function StartPage() {
    const [cars, setCars] = useState({});

    const filtait = (value) => {
        carService.filtr(value)
            .then(cars =>{ setCars(cars);
                console.log(cars)
            });
    }


    return (
        <>
            <FormForFilter onFilter={filtait} />
            {cars.length >0 && cars.map((car) =>(
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="#" />}
                >
                    <Meta title={`${car.model.model}`} />
                </Card>)
            )}
            
        </>
    )

}