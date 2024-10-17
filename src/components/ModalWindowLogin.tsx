import React, { FC, HTMLAttributes, useState } from "react";
import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import { FaArrowRightLong } from "react-icons/fa6";
import { loginApi } from "./api/login";
export type FieldType = {
    username: string;
    password: string;
  };

export interface ModalWindLoginProps
{
    name: string;
}
const ModalWindowLogin: FC<ModalWindLoginProps & React.FormHTMLAttributes<HTMLFormElement>> = ({name, ...props}) => 
 {
  const [namee, setName] = useState('');
  const [password, setPassword] = useState('');
  const onFinish: FormProps<FieldType>['onFinish'] = async () => {
    const data = await loginApi({username: namee, password});
    console.log(data)

  };
    return (
        <Form
        onFinish={onFinish}
        {...props}
        name="basic"
        className="form-login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: '600px', height: '700px', borderRadius: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center',  position: 'absolute', top: '150px', zIndex: '2', }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <p style={{color: '#1a45dd', marginLeft: '165px', marginBottom: '30px', fontSize: '25px', fontWeight: '500'}}>Добро пожаловать в {name}</p>
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
          <Button className="submitlog" style={{background: 'rgba( 165, 165, 165, 0.2)', border: '2px solid  #1a45dd', color: '#1a45dd'}} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        
      </Form>
    )
  }

  export default ModalWindowLogin;