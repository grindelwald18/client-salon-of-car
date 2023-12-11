
import React, {useEffect, useState} from 'react';
import authService from '../services/AuthService';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Auth() {

const [error, setError] = useState(null);
const navigate  = useNavigate();
const onFinish = (values) => {
    console.log(values);
    authService
        .Authentication(values)
        .then(response => {
            console.log(response)
            navigate('/', {replace: true})
        })
        .catch((e) => {
            console.log(e);
            setError('Неверный логин или пароль');
        });

};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


return (
  <Form  
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Login"
      name="login"
      rules={[
        {
          required: true,
          message: 'Please input your login!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    
);
}
