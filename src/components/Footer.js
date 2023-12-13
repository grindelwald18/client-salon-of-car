import React from 'react';
import { Layout, Typography, Row, Col, Divider } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }} className='footer'>
      <Row justify="center" align="middle">
        <Col span={8}>
          <Text strong>Мой автосалон ©2023</Text>
          <Divider />
          <Text>Адрес: г. Минск, ул. Интернациональная, д. 123</Text>
          <Text>Телефон: +7 123 456 7890</Text>
          <Text>Email: AVcar@gmail.com</Text>
        </Col>
        <Col span={8}>
          <Text strong>Ссылки</Text>
          <Divider />
          <ul>
            <li>
              <a href="http://localhost:3000/">Главная</a>
            </li>
            <li>
              <a href="http://localhost:3000/about-us">О нас</a>
            </li>
          </ul>
        </Col>
        <Col span={8}>
          <Text strong>Мы в социальных сетях</Text>
          <Divider />
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;