import React, { Component } from 'react'
import { Card, Button, Select, Form, DatePicker, Modal,Table, message } from "antd";
import "../content.css";
const { Option } = Select;

export default class Order extends Component {
    state={
        moreInfo:[]
    }
    handleChange=(selectedRowKeys, selectedRows)=>{
        this.setState({
            moreInfo:selectedRows
        })
    }
    openOrderDetail=()=>{
        if(!this.state.moreInfo.length){
            message.warning("请选择一条数据")
        }else{
            Modal.success({
                title:this.state.moreInfo[0].user_name,
                content:`订单编号${this.state.moreInfo[0].order_sn},行驶里程${this.state.moreInfo[0].distance},行驶时长${this.state.moreInfo[0].total_time}`
            })
        }
    }
    render() {
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ];
        const dataSource=[
            {
                order_sn: 1145124,
                bike_sn: 11125654,
                user_name: "江超",
                mobile: 13865492564,
                distance: "8000",
                total_time: "30min",
                status: "已停靠",
                start_time: "2019-10-12 09:45:33",
                end_time: "2019-10-12 10:15:30",
                total_fee:40,
                user_pay:40
              },
              {
                order_sn: 2785441,
                bike_sn: 54123556,
                user_name: "冯强",
                mobile: 1561258963,
                distance: "12000",
                total_time: "45min",
                status: "已停靠",
                start_time: "2019-10-12 09:12:22",
                end_time: "2019-10-12 09:57:10",
                total_fee:60,
                user_pay:60
              },
              {
                order_sn: 3458123,
                bike_sn: 12548654,
                user_name: "余娜",
                mobile: 1584598755,
                distance: "3000",
                total_time: "10min",
                status: "已停靠",
                start_time: "2019-10-12 10:33:20",
                end_time: "2019-10-12 10:43:33",
                total_fee:20,
                user_pay:20
              },
              {
                order_sn: 4518844,
                bike_sn: 12454512,
                user_name: "陆芳",
                mobile: 1385699882,
                distance: "1300",
                total_time: "8min",
                status: "已停靠",
                start_time: "2019-10-12 11:33:21",
                end_time: "2019-10-12 11:41:22",
                total_fee:10,
                user_pay:10
              },
              {
                order_sn: 7458665,
                bike_sn: 56412356,
                user_name: "于杰",
                mobile: 1885644221,
                distance: "3500",
                total_time: "25min",
                status: "已停靠",
                start_time: "2019-10-12 12:22:33",
                end_time: "2019-10-12 12:47:33",
                total_fee:50,
                user_pay:50
              }
        ]
        return (
            <div>
                <FilterForm />
                <Card className="wrap">
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary">结束订单</Button>
                </Card>
                <div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        style={{background:"#fff"}}
                        rowSelection={{
                            type:"radio",
                            onChange:this.handleChange
                        }}
                    />
                </div>
            </div>
        )
    }
}

class FilterForm extends Component {
    resetData = () => {
        const { resetFields } = this.props.form;
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
                        <Form.Item label="订单时间：">
                            {
                                getFieldDecorator("start_time")(
                                    <DatePicker style={{ marginRight: 5 }} showTime format="YYYY-MM-DD HH:mm:ss" />
                                )
                            }
                            {
                                getFieldDecorator("end_time")(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="订单状态：">
                            {
                                getFieldDecorator("state", {
                                    initialValue: ""
                                })(
                                    <Select style={{ width: 80 }}>
                                        <Option value="">全部</Option>
                                        <Option value="1">进行中</Option>
                                        <Option value="2">结束行程</Option>
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
