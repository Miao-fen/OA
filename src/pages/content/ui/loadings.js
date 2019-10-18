import React, { Component } from 'react'
import { Card, Spin, Alert, Icon } from "antd";
import "../content.css";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export default class loadings extends Component {
    render() {
        return (
            <div>
                <Card title="Spin加载中" className="wrap">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    <Spin indicator={antIcon} />
                </Card>
                <Card title="放在一个容器中居中" className="wrap">
                    <div className="box">
                        <Spin />
                    </div>
                </Card>
                <Card title="内容遮罩" className="wrap">
                <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="error"
                        style={{marginBottom:10}}
                    />
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="success"
                        showIcon
                        style={{marginBottom:10}}
                    />
                    <Spin tip="Loading..." spinning={true}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
