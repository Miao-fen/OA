import React, { Component } from 'react'
import { Row, Col } from 'antd';
import NavLeft from "./pages/navLeft/index";
import Header from "./pages/header/index";
import Footer from "./pages/footer/index";
import "./index.css"

export default class admin extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={4} className="nav_left">
                        <NavLeft/>
                    </Col>
                    <Col span={20} className="content">
                        <Header/>
                        <div className="panel">
                            {this.props.children}
                        </div>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        )
    }
}
