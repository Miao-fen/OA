import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link, HashRouter } from "react-router-dom"
import MenuConfig from "../../config/menuConfig"
import "./index.css"
const { SubMenu } = Menu;

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            menuTree: []
        }
    }
    componentDidMount() {
        const menuData = this.menuRender(MenuConfig);
        this.setState({
            menuTree: menuData
        })
    }
    menuRender(data) {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.menuRender(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key}><Link to={item.key}>{item.title}</Link></Menu.Item>
                )
            }
        })
    }
    render() {
        return (
            <div>
                <HashRouter>
                    <div className="logo">OA企业管理系统</div>
                    <Menu theme="dark">
                        {this.state.menuTree}
                    </Menu>
                </HashRouter>
            </div>
        )
    }
}
