import React, { Component } from 'react'
import { Row, Col } from "antd"
import axios from "axios";
import "./index.css";

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            weather: ""
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000)
        this.request()
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    request() {
        axios.get("https://restapi.amap.com/v3/weather/weatherInfo?key=2ea78c25be08c3ef5ec92c4b690eb4d3&city=320602").then((res) => {
            this.setState({ weather: res.data.lives[0].weather })
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header_top">
                    <Col span={24}>
                        <span>欢迎，某某某</span>
                        <a href="#" className="exit">退出</a>
                    </Col>
                </Row>
                <Row className="header_bottom">
                    <Col span={4} className="title">
                        <span>首页</span>
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.date.toLocaleTimeString()}</span>
                        <span>{this.state.weather}</span>
                    </Col>
                </Row>

            </div>
        )
    }
}
