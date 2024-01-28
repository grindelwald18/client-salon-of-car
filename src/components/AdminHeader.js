import React, {useState} from 'react';
import {FileExcelOutlined,FileDoneOutlined,LogoutOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import styles from '../css/index.css';
const items = [
    {
        label: (
            <a href="http://localhost:3000/brands" rel="noopener noreferrer">
                Бранды
            </a>
        ),
        key: 'approved',
        icon: <FileDoneOutlined  />,
    },
    {
        label: (
            <a href="http://localhost:3000/model"  rel="noopener noreferrer">
                Модели
            </a>
        ),
        key: 'not-approved',
        icon: <FileExcelOutlined />,
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