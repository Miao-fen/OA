import React, { Component } from 'react'
import { Card, Input, Button, Form, message, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Checkbox,Icon } from "antd";
import "../content.css";
import moment from 'moment';
const { Option } = Select;
const { TextArea } = Input;

class register extends Component {
    constructor(){
        super();
        this.state={
            userImg:""
        }
    }
    handleForm = () => {
        const { validateFields } = this.props.form;
        validateFields(["user", "psd"], (err, values) => {
            if (!err) {
                console.log(values)
            } else {
                message.error("您输入的信息有误，请重新输入！")
            }
        })
    }
    render() {
        const formItemLayout = {
            labelCol: { md: 4 },
            wrapperCol: { md: 20 }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                md: {
                    span: 20,
                    offset: 4
                }
            }
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="注册表单" className="wrap">
                    <Form {...formItemLayout}>
                        <Form.Item label="用户名：">
                            {
                                getFieldDecorator("user", {
                                    initialValue: "",
                                    rules: [
                                        { required: true, message: "用户名不能为空" },
                                        { max: 20, message: "用户名不能超过20个字符" },
                                        { pattern: /^\d{11}$/, message: "您的手机号不合法" }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" style={{ width: '70%' }} />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="密码：">
                            {
                                getFieldDecorator("psd", {
                                    rules: [
                                        {required:true,message:"密码不能为空"},
                                        { pattern: /^\d{6,8}$/, message: "请输入6到8位数字密码" }
                                    ]
                                })(
                                    <Input type="password" placeholder="请输入密码" style={{ width: '70%' }} />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="性别：">
                            {
                                getFieldDecorator("sex", {
                                    initialValue: "2"
                                })(
                                    <Radio.Group>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="年龄：">
                            {
                                getFieldDecorator("age", {
                                    initialValue: "18"
                                })(
                                    <InputNumber min={1} max={100} />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="当前状态：">
                            {
                                getFieldDecorator("state", {
                                    initialValue: "2"
                                })(
                                    <Select style={{ width: '70%' }}>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                        <Option value="3">北大才子一枚</Option>
                                        <Option value="4">百度EF</Option>
                                        <Option value="5">创业者</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="爱好：">
                            {
                                getFieldDecorator("hobby", {
                                    initialValue: ["1", "2"]
                                })(
                                    <Select
                                        mode="multiple"
                                        style={{ width: '70%' }}
                                        placeholder="Please select"
                                    >
                                        <Option value="1">听音乐</Option>
                                        <Option value="2">旅行</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">唱歌</Option>
                                        <Option value="5">旅行</Option>
                                        <Option value="6">看电影</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="是否已婚：">
                            {
                                getFieldDecorator("isMarried", {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="生日：">
                            {
                                getFieldDecorator("birthday", {
                                    initialValue: moment('2000-01-01')
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="联系地址：">
                            {
                                getFieldDecorator("address", {
                                    initialValue: "北京市海淀区啥啥啥"
                                })(
                                    <TextArea autosize={true} style={{ width: '70%' }} />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="早起时间：">
                            {
                                getFieldDecorator("time", {
                                    initialValue: moment("06:00:00", "HH:mm:ss")
                                })(
                                    <TimePicker />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="头像：">
                            {
                                getFieldDecorator("userImg")(
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        showUploadList={true}
                                    >
                                        {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            {
                                getFieldDecorator("isRead")(
                                    <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" onClick={this.handleForm}>注册</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(register)
