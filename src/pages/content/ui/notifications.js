import React, { Component } from 'react'
import { Card, Button,notification } from "antd";
import "../content.css"

export default class notifications extends Component {
    show = (type,msg) => {
        notification[type]({
            message: msg,
            description:'请注意查收'
        })
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框" className="wrap">
                    <Button onClick={()=>this.show('open','发工资了')}>open</Button>
                </Card>
                <Card title="带图标的通知提醒框" className="wrap">
                    <Button onClick={()=>this.show('info','发工资了')}>info</Button>
                    <Button type="primary" onClick={()=>this.show('success','工资已到账')}>success</Button>
                    <Button type="danger" onClick={()=>this.show('error','工资到账异常')}>error</Button>
                    <Button type="danger" onClick={()=>this.show('warning','工资到账异常')}>warning</Button>
                </Card>
            </div>
        )
    }
}
