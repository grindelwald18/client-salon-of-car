import { Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import brandService from '../services/BrandsService';
import modelService from '../services/ModelService';
import { Select, message } from 'antd';
const { Option } = Select;

export default function StartPage() {

    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [form]=Form.useForm();

    useEffect(() => {//эта функции вызывается когда загружается страница
        (async function getBrands() {//async - служит для того что-бы указать что запрос тут будут выполняться параллельно действия
            try {
                const data = await brandService.getBrands();//тут мы получаем все бренды (await - нужно для того чтобы мы ждали ответа от функции)
                setBrands(data);//тут записываем в нашу массив который создавали на 10 строке
                // console.log(data);
            } catch (error) {
            }
        })();//тут она сама вызывается 
    }, []);


    const onClickButton = () => {

        alert('Кнопка нажата');
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

    return (
        <>
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



                <Button type="primary" htmlType="submit" >Кликни на меня</Button>
            </Form>
        </>
    )

}