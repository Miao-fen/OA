import React, { Component } from 'react'
import { Card, Tabs,Icon } from "antd";
import "../content.css";
const { TabPane } = Tabs;

export default class tabs extends Component {
    render() {
        return (
            <div>
                <Card title="选项卡" className="wrap">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="选项卡禁用" className="wrap">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" disabled key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="选项卡带图标" className="wrap">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={
                                    <span>
                                        <Icon type="apple" />
                                        Tab 1
                                    </span>
                                } key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab={
                                    <span>
                                        <Icon type="android" />
                                        Tab 2
                                    </span>
                                } key="2">
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="选项卡签头位置" className="wrap">
                    <Tabs defaultActiveKey="1" tabPosition="left">
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}
