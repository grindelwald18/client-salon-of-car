
import React, {useEffect, useState} from 'react';
import brandService from '../services/BrandsService';
import modelService from '../services/ModelService';
import {Button, Form , Select, message, InputNumber, DatePicker} from 'antd';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
const { Option } = Select;


export default function FormForFilter({onFilter}) {

    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [form] = Form.useForm();

    const navigate  = useNavigate();

    useEffect(() => {
        (async function getBrands() {
            try {
                const data = await brandService.getBrands();
                setBrands(data);
            } catch (error) {
                console.log(error)
            }
        })();
    }, []);

    const goToNextPage =()=>{
        navigate('/brands')
    }
    const chooseBrand = async (brand) => {
        try {
            const data = await modelService.getModelsByBrandId(brand);
            setModels(data);
        }
        catch (error) {
            message.error(error)
        }
    }

    const handelPrpductionYear =(date) =>{
        if (date) {
            const year = date.year();
            console.log(year);
            // Дальнейшая обработка года, например, сохранение в состояние компонента
            form.setFieldValue({productionYear:date});
          }
    }

    const disabledDate=(data)=>{
        return data.year()>2024 || data.year()<2000;
    }
    
    
    const onClickButton = (value) => {
        onFilter(value);
    }

    return (
        <Form form={form} onFinish={onClickButton} className='form'>

                <div className='brand selectForm' >
                    <h3>Бренд</h3>
                    <Form.Item name="selectBrand" >
                        <Select className='select' onChange={chooseBrand}>
                            {
                                brands.map(brand => (
                                    <Option key={brand.id} value={brand.id}>
                                        {brand.brand}
                                    </Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                </div>

                <div className='model selectForm'>
                    <h3>Модель</h3>
                    <Form.Item name="selectModel" rules={[{required:false}]}>
                        <Select className='select' disabled = {!form.getFieldValue("selectBrand")}>
                            {
                                models.map(model => (
                                    <Option key={model.id} value={model.id}>
                                        {model.model}
                                    </Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                </div>

                <div className='prise selectForm'>
                    <h3>Цена</h3>
                    <div className='priseSelct'>
                        <Form.Item name="minAmount" rules={[{required:false}]}>
                            <InputNumber placeholder="От" min={0} max={5000000}/>
                        </Form.Item>
                        <Form.Item name="maxAmount" rules={[{required:false}]}>
                            <InputNumber placeholder="До" min={0} max={5000000}/>
                        </Form.Item>
                    </div>
                </div>
                <div className='year selectForm'>
                <h3>Год выпуска</h3>
                    <Form.Item name="productionYear" >
                        <DatePicker onChange={handelPrpductionYear} rules={[{required:false}]} picker="year" disabledDate={disabledDate} format="YYYY"/>
                    </Form.Item>
                </div>   


                <Button type="primary" htmlType="submit" className='buttonForm'>Найти</Button>
                <Button onClick={goToNextPage} >Кликни</Button>
            </Form>
 
    );

}
