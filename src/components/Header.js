import React, {useState} from 'react';
import {AppstoreOutlined, ShoppingCartOutlined,InfoCircleOutlined, WhatsAppOutlined, LogoutOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import styles from '../css/index.css';
const items = [
    {
        label: (
            <a href="http://localhost:3000"  rel="noopener noreferrer">
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
            <a href="http://localhost:3000/basket"  rel="noopener noreferrer">
                Корзина
            </a>
        ),
        key: 'alipay',
        icon:<ShoppingCartOutlined />,
    },
    {
        label: (
            <a href="http://localhost:3000/auth"  rel="noopener noreferrer" >
                Выход
            </a>
        ),
        key: 'logout',
        icon:<LogoutOutlined  />,
    },
];


export default function Header() {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        if (e.key == 'logout'){
            localStorage.removeItem('jwtToken')
            localStorage.removeItem('user')
        }
        setCurrent(e.key);
    };
   
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='header'/>;
};