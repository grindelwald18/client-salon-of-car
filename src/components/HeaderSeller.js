import React, {useState} from 'react';
import {FileExcelOutlined,FileDoneOutlined,LogoutOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import styles from '../css/index.css';
const items = [
    {
        label: (
            <a href="http://localhost:3000/contract/approved" rel="noopener noreferrer">
                Одобренные контракты
            </a>
        ),
        key: 'approved',
        icon: <FileDoneOutlined  />,
    },
    {
        label: (
            <a href="http://localhost:3000/contract/not-approved"  rel="noopener noreferrer">
                Не одобренные контракты
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