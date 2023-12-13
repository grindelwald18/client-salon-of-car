
import React, { useEffect, useState } from 'react';
import { Table, Empty, message, Card } from 'antd';
import contractService from '../services/ContractService';
import carService from '../services/CarServise';
const { Meta } = Card;

export default function UserContracts() {

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        (async function getContracts() {
            try {
                const data = await contractService.getContractByUserId();
                console.log(data);
                setContracts(data);
                // setIsLoading(false);
            } catch (error) {
                // setIsLoading(false);
            }
        })();
    }, []);

    const ImageSearch = ({ imageName }) => {
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
        return (<img className="searchImgContract" src={img} />)
    }

    return (
        <>
            <div className='ContractUserWrap'>

                {contracts.length === 0 ? (
                    <div className="emptyContainer">
                        <Empty description="у вас нет контрактов" />
                    </div>
                ) : (
                    contracts.map((contract) => (
                        <Card
                            key={contract.id}
                            className='card'
                            hoverable
                            style={{
                                width: 500,
                            }}
                            cover={<ImageSearch imageName={contract.car.img} />}
                        >
                            <Meta className="cardModelAndBrend" title={`${contract.car.model.brand.brand} ${contract.car.model.model}`} />
                            <Meta className="cardInf" title={`Цена: ${contract.car.amount}$`} />
                            <Meta className="cardInf" title={`Пробег: ${contract.car.mileage}км`} />
                            <Meta className="cardInf" title={`Год выпуска: ${contract.car.productionYear}`} />
                            <Meta className="cardInf" title={`Тип кузова: ${contract.car.bodyType.bodyType}`} />
                            <Meta className="cardInf" title={`Статус: ${contract.status}`} />
                            <Meta className="cardInf" title={`Когда был оформлен: ${new Date(contract.registrationDate).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}`} />
                        </Card>
                    ))
                )}
            </div>
        </>
    );

}