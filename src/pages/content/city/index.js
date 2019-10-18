import React, { Component } from 'react'
import { Card, Button, Form, Select, Modal, Table,message } from "antd"
import "../content.css"
const { Option } = Select;

export default class City extends Component {
    state = { modalVisible: false };
    handleOpenCity = () => {
        this.setState({
            modalVisible: true
        })
    }
    handleCancel = () => {
        this.setState({
            modalVisible: false
        })
    }
    handleOk=()=>{
        message.success("开通成功");
        this.setState({modalVisible:false})
    }
    render() {
        const columns = [
            {
                title:'城市ID',
                dataIndex:'id'
            }, {
                title: '城市名称',
                dataIndex: 'name'
            }, {
                title: '用车模式',
                dataIndex: 'mode',
                render(mode){
                    return mode ==1 ?'停车点':'禁停区';
                }
            }, {
                title: '营运模式',
                dataIndex: 'op_mode',
                render(op_mode) {
                    return op_mode == 1 ? '自营' : '加盟';
                }
            }, {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            }, {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(text){
                    return text.join("，")
                }
            }, {
                title: '城市开通时间',
                dataIndex: 'open_time'
            }, {
                title: '操作时间',
                dataIndex: 'update_time',
               
            }, {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }
        ];
        const dataSource=[
            {
                id: 1,
                name: "鹰潭市",
                mode: 1,
                op_mode: 1,
                franchisee_name: "滴滴出行",
                city_admins: ["江超","张三"],
                open_time: "1991-11-23 22:49:02",
                update_time: "2019-10-12",
                sys_user_name: "张敏"
              },
              {
                id: 2,
                name: "吉安市",
                mode: 1,
                op_mode: 1,
                franchisee_name: "滴滴出行",
                city_admins: ["冯强","李四"],
                open_time: "1973-09-15 01:04:53",
                update_time: "2019-10-12",
                sys_user_name: "沈军"
              },
              {
                id: 3,
                name: "黄南藏族自治州",
                mode: 2,
                op_mode: 2,
                franchisee_name: "滴滴出行",
                city_admins: ["余娜","王磊"],
                open_time: "1979-07-07 06:45:09",
                update_time: "2019-10-12",
                sys_user_name: "顾明"
              },
              {
                id: 4,
                name: "焦作市",
                mode: 1,
                op_mode: 2,
                franchisee_name: "滴滴出行",
                city_admins: ["陆芳","王伟"],
                open_time: "2016-09-19 22:31:17",
                update_time: "2019-10-12",
                sys_user_name: "邹敏"
              },
              {
                id: 5,
                name: "榆林市",
                mode: 2,
                op_mode: 2,
                franchisee_name: "滴滴出行",
                city_admins: ["于杰","李玉"],
                open_time: "2001-10-02 04:50:09",
                update_time: "2019-10-12",
                sys_user_name: "叶静"
              },
              {
                id: 6,
                name: "毕节市",
                mode: 1,
                op_mode: 2,
                franchisee_name: "滴滴出行",
                city_admins: ["姚磊","吴磊"],
                open_time: "1972-06-09 00:07:00",
                update_time: "2019-10-12",
                sys_user_name: "侯静"
              }
        ]
        return (
            <div>
                <FilterForm />
                <Card className="wrap">
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                    <Modal
                        title="开通城市"
                        visible={this.state.modalVisible}
                        onCancel={this.handleCancel}
                        onOk={this.handleOk}
                    >
                        <OpenCityForm/>
                    </Modal>
                </Card>
                <Card className="wrap">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        rowSelection={{
                            type:"checkbox"
                        }}
                    />
                </Card>
            </div>
        )
    }
}
class FilterForm extends Component {
    resetData=()=>{
        const {resetFields}=this.props.form;
        resetFields();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card className="wrap">
                    <Form layout="inline">
                        <Form.Item label="城市：">
                            {
                                getFieldDecorator("city", {
                                    initialValue: ""
                                })(
                                    <Select style={{ width: 100 }}>
                                        <Option value="">全部</Option>
                                        <Option value="1">北京市</Option>
                                        <Option value="2">天津市</Option>
                                        <Option value="3">深圳市</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="用车模式：">
                            {
                                getFieldDecorator("mode", {
                                    initialValue: ""
                                })(
                                    <Select style={{ width: 130 }}>
                                        <Option value="">全部</Option>
                                        <Option value="1">指定停车点模式</Option>
                                        <Option value="2">禁停区模式</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="运营模式：">
                            {
                                getFieldDecorator("op_mode", {
                                    initialValue: ""
                                })(
                                    <Select style={{ width: 100 }}>
                                        <Option value="">全部</Option>
                                        <Option value="1">自营</Option>
                                        <Option value="2">加盟</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="加盟商授权状态：">
                            {
                                getFieldDecorator("impower", {
                                    initialValue: ""
                                })(
                                    <Select style={{ width: 100 }}>
                                        <Option value="">全部</Option>
                                        <Option value="1">已授权</Option>
                                        <Option value="2">未授权</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
                            <Button onClick={this.resetData}>重置</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
FilterForm = Form.create()(FilterForm)
class OpenCityForm extends Component{
    render(){
        const formItemLayout={
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
        const {getFieldDecorator}=this.props.form;
        return(          
            <Form {...formItemLayout}>
                <Form.Item label="选择城市">
                    {
                        getFieldDecorator("city",{
                            initialValue:"1"
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="营运模式">
                    {
                        getFieldDecorator('op_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="用车模式">
                    {
                        getFieldDecorator('use_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                        )
                    }
                </Form.Item>
            </Form>
        )
    }
}
OpenCityForm=Form.create()(OpenCityForm)