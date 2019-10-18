import React, { Component } from 'react'
import { Card, Button, Radio } from "antd"
import "../content.css"
const { Group } = Button;

export default class buttons extends Component {
    constructor(){
        super();
        this.state={size:"default",load:false}
    }
    loadData=()=>{
        this.setState({load:true})
    }
    changeSize=(e)=>{
        this.setState({size:e.target.value})
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="wrap">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮" className="wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search" />
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="wrap">
                    <Button type="primary" loading={this.state.load} onClick={this.loadData}>确定</Button>
                    <Button type="primary" shape="circle" icon="search" loading />
                    <Button loading>点击加载</Button>
                    <Button shape="circle" icon="search" loading />
                    <Button type="primary">关闭</Button>
                </Card>
                <Card title="按钮组" className="wrap">
                    <Group>
                        <Button type="primary" icon="left" style={{marginRight:0}}>返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Group>
                </Card>
                <Card title="Loading按钮" className="wrap">
                    <Radio.Group onChange={this.changeSize} value={this.state.size}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        )
    }
}
