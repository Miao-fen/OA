import React, { Component } from 'react'
import { Card, Modal, Button } from "antd"
import "../content.css"

export default class modals extends Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
        loading: false,
        modal3Visible: false,
        modal4Visible: false
    }
    setModal1Visible = (modal1Visible) => {
        this.setState({ modal1Visible })
    }
    setModal2Visible = (modal2Visible) => {
        this.setState({ modal2Visible })
    }
    setModal3Visible = (modal3Visible) => {
        this.setState({ modal3Visible })
    }
    setModal4Visible = (modal4Visible) => {
        this.setState({ modal4Visible })
    }
    handleOk1 = () => {
        console.log("已确认")
    }
    handleOk2 = () => {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({ loading: false, modal2Visible: false })
        }, 3000)
    }
    showModal = (type) => {
        Modal[type]({
            title: "今天你该健身了",
            content: "今天去跑步一小时"
        })
    }
    countDown = () => {
        let secondsToGo = 5;
        const modal = Modal.success({
            title: 'This is a notification message',
            content: `This modal will be destroyed after ${secondsToGo} second.`,
        });
        const timer = setInterval(() => {
            secondsToGo -= 1;
            modal.update({
                content: `This modal will be destroyed after ${secondsToGo} second.`,
            });
        }, 1000);
        setTimeout(() => {
            clearInterval(timer);
            modal.destroy();
        }, secondsToGo * 1000);
    }
    showConfirm=()=>{
        for (let i = 0; i < 3; i += 1) {
            setTimeout(() => {
              Modal.confirm({
                content: <Button onClick={Modal.destroyAll}>Click to destroy all</Button>,
                onOk() {
                  console.log('OK');
                },
                onCancel() {
                  console.log('Cancel');
                },
              });
            }, i * 500);
          }
    }
render() {
    return (
        <div>
            <Card title="基础横态框" className="wrap">
                <Button type="primary" onClick={() => this.setModal1Visible(true)}>Open</Button>
                <Modal
                    title="React"
                    visible={this.state.modal1Visible}
                    onCancel={() => this.setModal1Visible(false)}
                    onOk={this.handleOk1}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>Open弹框</p>
                </Modal>
                <Button type="primary" onClick={() => this.setModal2Visible(true)}>自定义页脚</Button>
                <Modal
                    visible={this.state.modal2Visible}
                    title="React"
                    onOk={this.handleOk2}
                    onCancel={() => this.setModal2Visible(false)}
                    footer={[
                        <Button key="back" onClick={() => this.setModal2Visible(false)}>
                            Return
                            </Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk2}>
                            Submit
                             </Button>,
                    ]}
                >
                    <p>自定义页脚弹框</p>
                </Modal>
                <Button type="primary" onClick={() => this.setModal3Visible(true)}>顶部20px弹框</Button>
                <Modal
                    title="20px to Top"
                    style={{ top: 20 }}
                    visible={this.state.modal3Visible}
                    onOk={() => this.setModal3Visible(false)}
                    onCancel={() => this.setModal3Visible(false)}
                >
                    <p>顶部20px弹框</p>
                </Modal>
                <Button type="primary" onClick={() => this.setModal4Visible(true)}>水平垂直居中</Button>
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={this.state.modal4Visible}
                    onOk={() => this.setModal4Visible(false)}
                    onCancel={() => this.setModal4Visible(false)}
                >
                    <p>水平垂直居中弹框</p>
                </Modal>
            </Card>
            <Card title="信息确认框" className="wrap">
                <Button onClick={() => this.showModal("info")}>info</Button>
                <Button type="primary" onClick={() => this.showModal("success")}>success</Button>
                <Button type="danger" onClick={() => this.showModal("error")}>error</Button>
                <Button type="danger" onClick={() => this.showModal("warning")}>warning</Button>
                <Button type="primary" onClick={() => this.showModal("confirm")}>confirm</Button>
            </Card>
            <Card title="异步关闭对话框" className="wrap">
                <Button onClick={this.countDown}>Open modal to close in 5s</Button>
            </Card>
            <Card title="销毁确认对话框" className="wrap">
                <Button onClick={this.showConfirm}>confirm</Button>
            </Card>
        </div>
    )
}
}
