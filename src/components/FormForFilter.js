
import React, {useEffect, useState} from 'react';
import brandService from '../services/BrandsService';
import modelService from '../services/ModelService';
import {Button, Form , Select, message, InputNumber, DatePicker} from 'antd';
import { useNavigate } from 'react-router-dom';
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
        form.setFieldValue({productionYear:date});
    }

    const disabledDate=(data)=>{
        return data.year()>2024 || data.year()<2000;
    }

    
    const onClickButton = (value) => {
        onFilter(value);
    }

    return (
        <Form form={form} onFinish={onClickButton}>
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
                <Form.Item name="amount" rules={[{required:false}]}>
                    <InputNumber size="large" placeholder="large size" min={0} max={5000000}/>
                </Form.Item>
                
                <Form.Item name="productionYear" >
                    <DatePicker onChange={handelPrpductionYear} picker="year" disabledDate={disabledDate}/>
                </Form.Item>





                <Button type="primary" htmlType="submit" >Кликни на меня</Button>
                <Button onClick={goToNextPage} >Кликни</Button>
            </Form>
 
    );

}
