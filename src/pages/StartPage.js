import { Button } from 'antd';
import React, {useEffect, useState} from 'react';
import brandService from '../services/BrandsService';
import { Select } from 'antd';
const { Option } = Select;

export default function StartPage() {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        (async function getBrands() {
            try {
                const data = await brandService.getBrands();
                setBrands(data);
                // console.log(data);
            } catch (error) {
            }
        })();
    }, []);

    
    const onClickButton = () => {

        alert('Кнопка нажата');
    }


    return (
        <>
            <Select className='select'> 
                {
                    brands.map(brand => (
                        <Option key={brand.id} value={brand.id}>
                            {brand.brand}
                        </Option>
                    ))
                }
            </Select>
               


            <Button onClick={onClickButton} >Кликни на меня</Button>

        </>
    )

}