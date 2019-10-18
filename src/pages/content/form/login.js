import React, { Component } from 'react'
import { Card, Form, Input, Button,Icon,Checkbox } from "antd";
import "../content.css";

export default class login extends Component {
    render() {
        const formItemLayout={
            labelCol:{md:8},
            wrapperCol:{md:16}
        }
        const tailFormItemLayout = {
            wrapperCol: {
              md: {
                span: 16,
                offset: 8
              }
            }
          }
        return (
            <div>
                <Card title="基础表单" className="wrap">
                    <Form layout="horizontal" {...formItemLayout}>
                        <Form.Item label="用户名：">
                            <Input placeholder="请输入您的用户名" style={{width:"50%"}}/>
                        </Form.Item>
                        <Form.Item label="密码：">
                            <Input type="password" placeholder="请输入您的密码" style={{width:"50%"}}/>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登录行内表单" className="wrap">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入您的用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input type="password" placeholder="请输入您的密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登录水平表单" className="wrap">
                    <Form layout="horizontal">
                        <Form.Item>
                            <Input placeholder="请输入您的用户名" 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            style={{width:"20%"}}/>
                        </Form.Item>
                        <Form.Item>
                            <Input type="password" placeholder="请输入您的密码" 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            style={{width:"20%"}}/>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>记住密码</Checkbox>
                            <span style={{marginLeft:"60px",color:"red"}}>忘记密码</span>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
