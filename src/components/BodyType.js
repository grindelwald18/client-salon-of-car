import React, { useEffect, useState } from 'react';
import bodyTypeService from '../services/BodyTypeService';
import carService from '../services/CarServise';
import { Button, Form, Select, message, InputNumber, DatePicker, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import { Card } from 'antd';
// const { Meta } = Card;

export default function BodyType({ onSelectBodyType }) {
    const [bodyTypes, setBodyType] = useState([]);
    const [selectedBodyType, setSelectedBodyType] = useState(null);
    const [isQueryComplete, setIsQueryComplete] = useState(false);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        (async function getBodyType() {
            try {
                const data = await bodyTypeService.getBodyType();
                setBodyType(data);
            } catch (error) {
                console.log(error)
            }
        })();
    }, []);
    const handleBodyTypeClick = async (bodyTypeId) => {
        onSelectBodyType(bodyTypeId);
        setSelectedBodyType(bodyTypeId);
        // try {
        //     const filteredCars = await carService.filtrByBodyType(bodyTypeId);
        //     // console.log(filteredCars);
        //     setCars(filteredCars);
        // } catch (error) {
        //     console.log(error);
        // }
    };
    return (

        <div className='bodyTypeWrap'>
            {bodyTypes.length > 0 && bodyTypes.map((bodyType) => (
                <button
                    className={`bodyTypeCard ${selectedBodyType === bodyType.id ? 'selected' : ''}`}
                    key={bodyType.id}
                    onClick={() => handleBodyTypeClick(bodyType.id)}
                >
                    {bodyType.bodyType}
                </button>

            ))}
        </div>

    );
}