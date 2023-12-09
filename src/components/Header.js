import React, {useState} from 'react';
import {AppstoreOutlined, ShoppingCartOutlined,InfoCircleOutlined, WhatsAppOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import styles from '../css/index.css';
const items = [
    {
        label: (
            <a href="#"  rel="noopener noreferrer">
                Каталог
            </a>
        ),
        key: 'mail',
        icon: <AppstoreOutlined/>,
    },
    {
        label: (
            <a href="#" rel="noopener noreferrer">
                О нас
            </a>
        ),
        key: 'app',
        icon: <InfoCircleOutlined />,
    },
    {
        label: (
            <a href="#"  rel="noopener noreferrer">
                Контакты
            </a>
        ) ,
        key: 'SubMenu',
        icon: <WhatsAppOutlined />,
    },
    {
        label: (
            <a href="#"  rel="noopener noreferrer">
                Корзина
            </a>
        ),
        key: 'alipay',
        icon:<ShoppingCartOutlined />,
    },
];


export default function Header() {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
   
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='header'/>;
};