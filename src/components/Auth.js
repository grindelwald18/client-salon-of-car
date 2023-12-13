import React, { useEffect, useState } from 'react';
import authService from '../services/AuthService';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    authService
      .Authentication(values)
      .then((response) => {
        const navigations = {
          USER: '/',
          SELLER: '/contract/not-approved',
          ADMIN: '/',
        };

        navigate(navigations[response.user.authorities[0].authority], { replace: true });
      })
      .catch((e) => {
        console.log();
        setError('Неверный логин или пароль');
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize:'45px' }}>Авторизация</h2>
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
        {error && ( 
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    style={{color: 'red'}}
                >
                    {error}
                </Form.Item>
            )}
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
    </div>
  );
}