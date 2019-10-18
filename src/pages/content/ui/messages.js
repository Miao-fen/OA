import React, { Component } from 'react'
import { Card, Button, message } from "antd";
import "../content.css";

export default class messages extends Component {
    show=(type,msg)=>{
        message[type](msg)
    }
    render() {
        return (
            <div>
                <Card title="Message全局提示" className="wrap">
                    <Button type="primary" onClick={()=>this.show("info","info message")}>info</Button>
                    <Button type="primary" onClick={()=>this.show("success","success message")}>success</Button>
                    <Button type="primary" onClick={()=>this.show("error","error message")}>error</Button>
                    <Button type="primary" onClick={()=>this.show("warning","warning message")}>warning</Button>
                    <Button type="primary" onClick={()=>this.show("loading","loading message")}>loading</Button>
                </Card>
            </div>
        )
    }
}
