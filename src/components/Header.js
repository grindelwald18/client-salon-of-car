import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, ShoppingCartOutlined, InfoCircleOutlined, LogoutOutlined , FileDoneOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [current, setCurrent] = useState('mail');
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    setCurrent(getCurrentMenuKey());
  }, [currentPath]);

  const getCurrentMenuKey = () => {
    const menu = items.find((item) => item.label.props.href === currentPath);
    return menu ? menu.key : '';
  };

  const onClick = (e) => {
    console.log('click ', e);
    if (e.key === 'logout') {
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('user');
    }
    setCurrent(e.key);
  };
  
const items = [
  {
    label: (
      <a href="http://localhost:3000" rel="noopener noreferrer">
        Каталог
      </a>
    ),
    key: 'mail',
    icon: <AppstoreOutlined />,
  },
  {
    label: (
      <a href="http://localhost:3000/about-us" rel="noopener noreferrer">
        О нас
      </a>
    ),
    key: 'app',
    icon: <InfoCircleOutlined />,
  },
  {
    label: (
      <a href="http://localhost:3000/basket" rel="noopener noreferrer">
        Корзина
      </a>
    ),
    key: 'alipay',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: (
      <a href="http://localhost:3000/contract/user" rel="noopener noreferrer">
        Мои контракты
      </a>
    ),
    key: 'contract',
    icon: <FileDoneOutlined />,
  },
  {
    label: (
      <a href="http://localhost:3000/auth" rel="noopener noreferrer">
        Выход
      </a>
    ),
    key: 'logout',
    icon: <LogoutOutlined />,
  },
];



  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" className="header">
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Header;