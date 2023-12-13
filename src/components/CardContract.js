
import React, { useEffect, useState } from 'react';
import { Card, Empty, Button, Form, Input, Modal, Spin } from 'antd';
import contractService from '../services/ContractService';
import carService from '../services/CarServise';
import { toast } from 'react-toastify';
const { Meta } = Card;

export default function CardContract() {

    const [contracts, setContracts] = useState([]);


    useEffect(() => {
        (async function getContracts() {
            try {
                const data = await contractService.getContractByUserId();
                setContracts(data);
                // setIsLoading(false);
                console.log(data);
            } catch (error) {
                // setIsLoading(false);
            }
        })();
    }, []);

    const ImageSearch=({imageName})=>{
        const [img, setImg] = useState("");

        useEffect(() => {
            carService.getImg(imageName)
                .then((data) => {
                    setImg(URL.createObjectURL(data));
                })
                .catch((error) => {
                    console.error('Error fetching item image:', error);
                });
        }, [imageName]);
        return (<img className="searchImg" src={img}/>)
    }

    return (
        <>
            {contracts.length === 0 ? (
                <div className="emptyContainer">
                    <Empty description="У вас контрактов" />
                </div>
            ) : (
                contracts.map((contract) => (
                    <Card
                        key={contract.id}
                        className='cardContract'
                        hoverable
                        style={{
                            width: 500,
                        }}
                        cover={<ImageSearch imageName={contract.car.img} />}
                    >
                        <Meta className="cardModelAndBrend" title={`${contract.car.model.brand.brand} ${contract.car.model.model}`} />
                        <Meta title={`Цена машины : ${contract.car.amount}$`} />
                        <Meta title={`Пробег: ${contract.car.mileage}км`} />
                        <Meta title={`Год выпуска: ${contract.car.productionYear}`} />
                        <Meta title={`Тип кузова: ${contract.car.bodyType.bodyType}`} />
                        <Meta title={`ФИО:: ${contract.user.surname} `} />
                        {/* <Meta title={`Дата оформления контракта: ${contract.registrationDatee}`} /> */}
                        <Meta title={`Статус контракта: ${contract.status}`} />
                        {/* <Meta title={`Цена с учетом процентов продовца : ${contract.totalAmount}$`} /> */}
                    </Card>
                ))
            )}
        </>
    );

}