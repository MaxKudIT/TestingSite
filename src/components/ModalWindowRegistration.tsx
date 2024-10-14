import { Button, Form, Input, Select } from "antd";
import React from "react";
import { FieldType } from "./ModalWindowLogin";
const ModalWindowRegistration = () =>
  {
    const { Option } = Select;
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
         <p style={{color: 'white', marginLeft: '165px', marginBottom: '30px', fontSize: '25px', fontWeight: '500'}}>Добро пожаловать в Collage</p>
         <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          style={{marginRight: '100px'}}
        >
          <Input />
        </Form.Item>
    
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          style={{marginRight: '100px'}}
        >
          <Input.Password/>
        </Form.Item>
          <Form.Item name="gender" label="Gender"  style={{marginRight: '100px'}} rules={[{ required: true }]}>
        <Select
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item style={{marginRight: '100px'}} wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="submitlog" style={{background: 'rgba( 165, 165, 165, 0.2)', border: '1px solid white', marginTop: '30px'}} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      
    )
  }

  export default ModalWindowRegistration;