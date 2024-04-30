'use client';

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
const LoginPage = () => {

    // const navigate = 


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        

    };



    return (
        <div className='max-w-xl bg-[#2b2a33] p-6 rounded-md'>
            <Form
                name="normal_login"
                className="login-form text-white"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="E-mail Address" 
                    />
                </Form.Item>


                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                {/* <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className='text-white'>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot text-white ml-6" href="">
                        Forgot password
                    </a>
                </Form.Item> */}

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button font-semibold  text-white">
                        Log in
                    </Button>
                    {/* <span className='text-white ml-6 mr-4'>Or</span> <Link className='text-white' href={'/register'}>Register Now</Link> */}
                </Form.Item>
            </Form>
        </div>
    );
};
export default LoginPage;