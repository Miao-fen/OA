import React, { Component } from 'react'
import { Card, Input, Form, Button, Table, Modal, Radio,Select, DatePicker } from "antd";
import "../content.css";
const {Option}=Select;
const {TextArea}=Input;

export default class index extends Component {
    state = {
        modalVisible: false,
        selectedItem:[],
    }
    handleCancel = () => {
        this.setState({
            modalVisible: false
        })
    }
    handleChange=(selectedRowKeys,selectedRows)=>{
        this.setState({
            selectedItem:selectedRows
        })
    }
    handleOperate = (type) => {
        if (type == "create") {
            this.setState({
                modalVisible: true
            })
        }else if(type=="edit"||type=="detail"){
            if(!this.state.selectedItem.length){
                Modal.info({
                    title:"信息",
                    content:"请选择一个用户"
                })
            }
        }else if(type=="delete"){
            if(!this.state.selectedItem.length){
                Modal.info({
                    title:"信息",
                    content:"请选择一个用户"
                })
            }
        }
    }
    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id'
        }, {
            title: '用户名',
            dataIndex: 'userName'
        }, {
            title: '性别',
            dataIndex: 'sex',
            render(sex) {
                return sex == 1 ? '男' : '女'
            }
        }, {
            title: '状态',
            dataIndex: 'state',
            render(state) {
                let config = {
                    '1': '咸鱼一条',
                    '2': '风华浪子',
                    '3': '北大才子一枚',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state];
            }
        }, {
            title: '爱好',
            dataIndex: 'interest',
            render(interest) {
                let config = {
                    '1': '游泳',
                    '2': '打篮球',
                    '3': '踢足球',
                    '4': '跑步',
                    '5': '爬山',
                    '6': '骑行',
                    '7': '桌球',
                    '8': '麦霸'
                }
                return config[interest];
            }
        }, {
            title: '婚姻',
            dataIndex: 'isMarried',
            render(isMarried) {
                return isMarried ? '已婚' : '未婚'
            }
        }, {
            title: '生日',
            dataIndex: 'birthday'
        }, {
            title: '联系地址',
            dataIndex: 'address'
        }, {
            title: '早起时间',
            dataIndex: 'time'
        }
        ];
        const dataSource = [
            {
                id: 1,
                userName: "薛娟",
                sex: 2,
                state: "1",
                interest: "1",
                isMarried: true,
                birthday: "1992-03-04",
                address: "上海市浦江区",
                time: "07:00:00"
            },
            {
                id: 2,
                userName: "王伟",
                sex: 1,
                state: "2",
                interest: "3",
                isMarried: true,
                birthday: "1992-07-21",
                address: "上海市浦江区",
                time: "07:00:00"
            },
            {
                id: 3,
                userName: "郭磊",
                sex: 1,
                state: "2",
                interest: "3",
                isMarried: true,
                birthday: "1991-12-21",
                address: "上海市浦江区",
                time: "07:00:00"
            },
            {
                id: 4,
                userName: "杨妮",
                sex: 2,
                state: "2",
                interest: "5",
                isMarried: false,
                birthday: "1994-06-21",
                address: "上海市浦江区",
                time: "07:00:00"
            },
            {
                id: 5,
                userName: "李玉",
                sex: 1,
                state: "2",
                interest: "4",
                isMarried: true,
                birthday: "1994-06-21",
                address: "上海市浦江区",
                time: "07:00:00"
            }
        ]
        return (
            <div>
                <Card className="wrap">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input type="password" placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card className="wrap">
                    <Button icon="plus" type="primary" onClick={() => { this.handleOperate('create') }}>创建员工</Button>
                    <Modal
                        title="创建员工"
                        visible={this.state.modalVisible}
                        onCancel={this.handleCancel}
                        width={800}
                    >
                        <StaffForm />
                    </Modal>
                    <Button icon="edit" onClick={() => { this.handleOperate('edit') }}>编辑员工</Button>
                    <Button onClick={() => { this.handleOperate('detail') }}>员工详情</Button>
                    <Button type="danger" icon="delete" onClick={() => { this.handleOperate('delete') }}>删除员工</Button>
                </Card>
                <div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        style={{background:"#fff"}}
                        rowSelection={{
                            type: "radio",
                            onChange:this.handleChange
                        }}
                    />
                </div>
            </div>
        )
    }
}
class StaffForm extends Component {
    render() {
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form {...formItemLayout}>
                    <Form.Item label="用户名">
                        {
                            getFieldDecorator("user_name")(
                                <Input placeholder="请输入用户名" />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="性别">
                        {
                            getFieldDecorator("sex")(
                                <Radio.Group>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </Radio.Group>
                            )
                        }
                    </Form.Item>
                    <Form.Item label="状态">
                        {
                            getFieldDecorator("state")(
                                <Select>
                                    <Option value={1}>咸鱼一条</Option>
                                    <Option value={2}>风华浪子</Option>
                                    <Option value={3}>北大才子一枚</Option>
                                    <Option value={4}>百度FE</Option>
                                    <Option value={5}>创业者</Option>
                                </Select>
                            )
                        }
                    </Form.Item>
                    <Form.Item label="生日">
                        {
                            getFieldDecorator("birthday")(
                                <DatePicker showTime format="YYYY-MM-DD"/>
                            )
                        }
                    </Form.Item>
                    <Form.Item label="联系地址">
                        {
                            getFieldDecorator("address")(
                                <TextArea rows={3} placeholder="请输入联系地址"/>
                            )
                        }
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
StaffForm = Form.create()(StaffForm)