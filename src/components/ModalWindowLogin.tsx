import React, { FC, useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { FaArrowRightLong } from "react-icons/fa6";
export type FieldType = {
    username: string;
    password: string;
  };
export interface ModalWindLoginProps
{
    name: string;
}
const ModalWindowLogin: FC<ModalWindLoginProps> = ({name}) => 
 {
  const [namee, setName] = useState('');
  const [password, setPassword] = useState('');
    return (
        <Form
        name="basic"
        className="form-login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: '600px', height: '700px', borderRadius: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', top: '90px'}}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <p style={{color: 'white', marginLeft: '165px', marginBottom: '30px', fontSize: '25px', fontWeight: '500'}}>Добро пожаловать в {name}</p>
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          style={{marginRight: '100px'}}
        >
          <Input onChange={(e) => setName(e.target.value)}/>
        </Form.Item>
    
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          style={{marginRight: '100px'}}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)}/>
        </Form.Item>
        <Form.Item style={{marginRight: '100px'}} wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="submitlog" style={{background: 'rgba( 165, 165, 165, 0.2)', border: '1px solid white'}} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }

  export default ModalWindowLogin;