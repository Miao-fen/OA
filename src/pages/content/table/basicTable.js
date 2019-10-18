import React, { Component } from 'react'
import { Card, Table,Button } from "antd";
import "../content.css";

export default class basicTable extends Component {
    handleChange=(selectedRowKeys, selectedRows)=>{
        console.log(selectedRowKeys);
        console.log(selectedRows);
    }
    render() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                sex: 1,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                sex: 1,
                address: '西湖区湖底公园1号',
            },
            {
                key: '3',
                name: '杨幂',
                age: 32,
                sex: 2,
                address: '西湖区湖底公园1号',
            },
            {
                key: '4',
                name: '杨颖',
                age: 32,
                sex: 2,
                address: '西湖区湖底公园1号',
            },
            {
                key: '5',
                name: '关晓彤',
                age: 27,
                sex: 2,
                address: '西湖区湖底公园1号',
            },
            {
                key: '6',
                name: '迪丽热巴',
                age: 28,
                sex: 2,
                address: '西湖区湖底公园1号',
            },
            {
                key: '7',
                name: '赵丽颖',
                age: 27,
                sex: 2,
                address: '西湖区湖底公园1号',
            },
            {
                key: '8',
                name: '杨紫',
                age: 27,
                sex: 2,
                address: '西湖区湖底公园1号',
            },
            {
                key: '9',
                name: '罗志祥',
                age: 39,
                sex: 1,
                address: '西湖区湖底公园1号',
            },
            {
                key: '10',
                name: '雷佳音',
                age: 38,
                sex: 1,
                address: '西湖区湖底公园1号',
            },
            {
                key: '11',
                name: '孙红雷',
                age: 40,
                sex: 1,
                address: '西湖区湖底公园1号',
            },
            {
                key: '12',
                name: '一条小团团',
                age: 22,
                sex: 2,
                address: '西湖区湖底公园1号',
            },
            {
                key: '13',
                name: '不知道谁了',
                age: 27,
                sex: 2,
                address: '西湖区湖底公园1号',
            },
            {
                key: '14',
                name: '爱谁谁',
                age: 30,
                sex: 1,
                address: '西湖区湖底公园1号',
            },
        ];
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width:150,
                fixed:"left",
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width:120,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(text) {
                    if (text === 1) {
                        return "男"
                    } else {
                        return "女"
                    }
                },
                width:120,
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width:150,
            },
            {
                title: '备注',
                key: 'remark',
                width:120,
                render(text, record) {
                    if(record.age<30){
                        return "青年"
                    }else{
                        return "中年"
                    }
                }
            },
            {
                title: '操作',
                key: 'handle',
                width:200,
                render(text, record) {
                    if(record.sex===1){
                        return <Button type="primary">挣钱养家</Button>
                    }else{
                        return <Button type="primary">貌美如花</Button>
                    }
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width:120,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                width:120,
                render(text) {
                    if (text === 1) {
                        return "男"
                    } else {
                        return "女"
                    }
                }
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width:150,
            },
            {
                title: '备注',
                key: 'remark',
                width:120,
                render(text, record) {
                    if(record.age<30){
                        return "青年"
                    }else{
                        return "中年"
                    }
                }
            },
            {
                title: '操作',
                key: 'handle',
                width:200,
                render(text, record) {
                    if(record.sex===1){
                        return <Button type="primary">挣钱养家</Button>
                    }else{
                        return <Button type="primary">貌美如花</Button>
                    }
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width:120,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                width:120,
                render(text) {
                    if (text === 1) {
                        return "男"
                    } else {
                        return "女"
                    }
                }
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width:150,
            },
            {
                title: '备注',
                key: 'remark',
                width:120,
                render(text, record) {
                    if(record.age<30){
                        return "青年"
                    }else{
                        return "中年"
                    }
                }
            },
            {
                title: '操作',
                key: 'handle',
                width:200,
                render(text, record) {
                    if(record.sex===1){
                        return <Button type="primary">挣钱养家</Button>
                    }else{
                        return <Button type="primary">貌美如花</Button>
                    }
                }
            },
        ];
        return (
            <div>
                <Card title="基础表格" className="wrap">
                    <Table 
                        dataSource={dataSource} 
                        columns={columns} 
                        pagination={{
                            defaultCurrent:1,
                            showSizeChanger:true,
                            defaultPageSize:7
                        }}
                        rowSelection={{
                            type:"checkbox",
                            onChange:this.handleChange
                        }}
                        scroll={{
                            x:2300,
                            y:600
                        }}
                    />
                </Card>
            </div>
        )
    }
}
