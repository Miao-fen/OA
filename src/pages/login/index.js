import React, { Component } from 'react'
import { Link, HashRouter } from "react-router-dom"
import "./index.css"

export default class login extends Component {
    constructor() {
        super();
        this.state = {
            uname: "",
            psd: ""
        }
    }
    showName = (name) => {
        this.setState({
            uname: name
        })
    }
    showPsd = (psd) => {
        this.setState({
            psd: psd
        })
    }
    commit = () => {
        if (this.state.uname === "" && this.state.psd === "") {
            alert("请输入用户名及密码")
        } else if (this.state.uname === "") {
            alert("请输入用户名")
        } else if (this.state.psd === "") {
            alert("请输入密码")
        }
    }
    render() {
        return (
            <div className="login">
                <HashRouter>
                    <Uname getName={this.showName} />
                    <Password getPsd={this.showPsd} />
                    <Link to="/ui"><button className="btn" onClick={this.commit}>登录</button></Link>
                </HashRouter>
            </div>
        )
    }
}
class Uname extends Component {
    constructor() {
        super();
        this.state = {
            uname: "",
            unameerr: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            uname: event.target.value
        })
    }
    handleBlur = () => {
        this.props.getName(this.state.uname);
        var unameReg = /^(?!\d+$)(?![a-zA-Z]+$)(?!_+$)(?![0-9_]+$)(?![a-zA-Z_]+$)\w{4,8}$/;
        if (unameReg.test(this.state.uname)) {
            this.setState({ unameerr: "" })
        } else {
            this.setState({ unameerr: "您的用户名输入错误" })
        }
    }
    render() {
        return (
            <div>
                <input type="text" name="uname" value={this.state.uname} onChange={this.handleChange} onBlur={this.handleBlur} />
                <span className="err">{this.state.unameerr}</span>
            </div>
        )
    }
}
class Password extends Component {
    constructor() {
        super();
        this.state = {
            psd: "",
            psderr: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            psd: event.target.value
        })
    }
    handleBlur = () => {
        this.props.getPsd(this.state.psd)
        var passwordReg = /^\d{6}$/;
        if (passwordReg.test(this.state.psd)) {
            this.setState({ psderr: "" })
        } else {
            this.setState({ psderr: "您的密码输入错误" })
        }
    }
    render() {
        return (
            <div className="psd_input">
                <input type="password" name="psd" value={this.state.psd} onChange={this.handleChange} onBlur={this.handleBlur} />
                <span className="err">{this.state.psderr}</span>
            </div>
        )
    }
}