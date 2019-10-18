import React, { Component } from 'react'
import { Card, Button, Form, Input, Select, Tree, Transfer, Modal, Table } from 'antd';
import axios from "axios";
import Moment from "moment";
import MenuConfig from "../../../config/menuConfig"
import "../content.css"
const { Option } = Select;
const { TreeNode } = Tree;

export default class index extends Component {
    constructor() {
        super();
        this.state = { 
            list: [], 
            isRoleVisible: false, 
            isPermEditVisible: false, 
            isUserVisible: false, 
            selectedItem: "", 
            detailInfo: "", 
            mockData: [],
            menuInfo:[] 
        }
    }
    requestList() {
        axios.get("https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/role/list").then((res) => {
            let list = res.data.result.item_list.map((item, i) => {
                item.key = i;
                return item;
            })
            this.setState({
                list: list
            })
        })
    }
    componentDidMount() {
        this.requestList()

    }
    //角色创建
    handleRole = () => {
        this.setState({
            isRoleVisible: true
        })
    }
    //角色提交
    handleRoleSubmit=()=>{
        let data=this.roleForm.props.form.getFieldsValue();
        this.setState({
            isRoleVisible:false
        })
        this.requestList();
    }
    //设置权限
    handlePermission = () => {
        if(!this.state.selectedItem){
            Modal.info({
                title:"信息",
                content:"请选择一个角色"
            })
            return;
        }
        this.setState({
            isPermEditVisible: true,
            datailInfo:this.state.selectedItem[0]
        })
        let menuList=this.state.selectedItem.menus;
        this.setState({
            menuInfo:menuList
        })
    }
    //用户授权
    handleUserAuth = () => {
        if(!this.state.selectedItem){
            Modal.info({
                title:"信息",
                content:"请选择一个角色"
            })
            return;
        }
        this.getRoleUserList(this.state.selectedItem.id);
        this.setState({
            isUserVisible: true,
            isAuthClosed: false,
            detailInfo: this.state.selectedItem
        });
    }
    getRoleUserList=()=>{
        axios.get("https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/role/user_list").then((res)=>{

            if(res.data.result.length){
                this.getAuthUserList(res.data.result)
            }
        })
    }
    getAuthUserList=(dataSource)=>{
        const mockData=[];
        const targetKeys=[];
        if(dataSource&&dataSource.length>0){
            for(var i=0;i<dataSource.length;i++){
                const data={
                    key: dataSource[i].user_id,
                    title: dataSource[i].user_name,
                    status: dataSource[i].status,
                };
                if (data.status == 1) {
                    targetKeys.push(data.key);
                }
                    mockData.push(data);


            }
            this.setState({mockData, targetKeys});

        }
    }
    
    render() {
        const columns = [
            {
                title: '角色ID',
                dataIndex: 'id'
            }, {
                title: '角色名称',
                dataIndex: 'role_name'
            }, {
                title: '创建时间',
                dataIndex: 'create_time',
            }, {
                title: '使用状态',
                dataIndex: 'status',
                render(status) {
                    if (status == 1) {
                        return "启用"
                    } else {
                        return "停用"
                    }
                }
            }, {
                title: '授权时间',
                dataIndex: 'authorize_time',

            }, {
                title: '授权人',
                dataIndex: 'authorize_user_name',
            }
        ];
        return (
            <div>
                <Card className="wrap">
                    <Button type="primary" onClick={this.handleRole}>创建角色</Button>
                    <Button type="primary" onClick={this.handlePermission}>设置权限</Button>
                    <Button type="primary" onClick={this.handleUserAuth}>用户授权</Button>
                </Card>
                <div style={{ background: "#FFF", padding: "10px", marginTop: 10 }}>
                    <Table columns={columns}
                        dataSource={this.state.list}
                        rowSelection={{
                            type: "radio",
                            onChange: (selectedRowKeys, selectedRows) => {
                                this.setState({ selectedItem: selectedRows })
                            }
                        }}

                    >

                    </Table>
                </div>
                <Modal
                    title="创建角色"
                    visible={this.state.isRoleVisible}
                    onOk={this.handleRoleSubmit}
                    onCancel={() => {
                        this.roleForm.props.form.resetFields();
                        this.setState({
                            isRoleVisible: false
                        })
                    }}
                >
                    <RoleForm wrappedComponentRef={(inst) => this.roleForm = inst} />
                </Modal>
                <Modal
                    title="权限设置"
                    visible={this.state.isPermEditVisible}
                    width={600}
                    onCancel={() => {
                        this.permEditForm.props.form.resetFields();
                        this.setState({
                            isPermEditVisible: false
                        })
                    }}
                >
                    <PermEditForm
                        wrappedComponentRef={(inst) => this.permEditForm = inst}
                        detailInfo={this.state.detailInfo}
                        menuInfo={this.state.menuInfo||[]}
                        patchMenuInfo={(checkedKeys)=>{
                            this.setState({
                                menuInfo: checkedKeys
                            });
                        }}
                    />
                </Modal>
                <Modal
                    title="用户授权"
                    width={800}
                    visible={this.state.isUserVisible}
                    onCancel={() => {
                        this.roleAuthForm.props.form.resetFields();
                        this.setState({
                            isUserVisible: false
                        })
                    }}
                >
                    <RoleAuthForm
                        wrappedComponentRef={(inst) => this.roleAuthForm = inst}
                        targetKeys={this.state.targetKeys}
                        mockData={this.state.mockData}
                    />
                </Modal>
            </div>
        )
    }
}
//创建角色
class RoleForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 16 }
        };
        return (
            <Form layout="horizontal">
                <Form.Item label="角色名称" {...formItemLayout}>
                    {
                        getFieldDecorator('role_name', {
                            initialValue: ''
                        })(
                            <Input type="text" placeholder="请输入角色名称" />
                        )
                    }
                </Form.Item>
                <Form.Item label="状态" {...formItemLayout}>
                    {
                        getFieldDecorator('state', {
                            initialValue: 1
                        })(
                            <Select>
                                <Select.Option value={1}>开启</Select.Option>
                                <Select.Option value={0}>关闭</Select.Option>
                            </Select>
                        )}
                </Form.Item>
            </Form>
        );
    }
}
RoleForm = Form.create({})(RoleForm);
//设置权限
class PermEditForm extends Component {
    rendertreeNodes(data) {
        return data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key}>
                        {this.rendertreeNodes(item.children)}
                    </TreeNode>
                )
            } else {
                return (
                    <TreeNode title={item.title} key={item.key} />
                )
            }
        })
    }
    // 设置选中的节点，通过父组件方法再传递回来
    onCheck = (checkedKeys) => {
        this.props.patchMenuInfo(checkedKeys);
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        };
        return (
            <div>
                <Form>
                    <Form.Item label="角色名称" {...formItemLayout}>
                        <Input disabled placeholder={this.props.detailInfo.role_name} />
                    </Form.Item>
                    <Form.Item label="状态" {...formItemLayout}>
                        {
                            getFieldDecorator("status", {
                                initialValue: "1"
                            })(
                                <Select>
                                    <Option value="1">启用</Option>
                                    <Option value="0">启用</Option>
                                </Select>
                            )
                        }
                    </Form.Item>
                    <Tree
                        checkable
                        defaultExpandAll
                        checkedKeys={this.props.menuInfo}
                        onCheck={(checkedKeys)=>{
                            this.onCheck(checkedKeys)
                        }}
                    >
                        <TreeNode title="平台权限" key="platform_all">
                            {this.rendertreeNodes(MenuConfig)}
                        </TreeNode>
                    </Tree>
                </Form>
            </div>
        )
    }
}
PermEditForm = Form.create()(PermEditForm)
//用户授权
class RoleAuthForm extends Component {
    filterOption=(inputValue,option)=>{
        return option.title.indexOf(inputValue) > -1;
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        };
        return (
            <div>
                <Form>
                    <Form.Item label="角色名称" {...formItemLayout}>
                        <Input disabled />
                    </Form.Item>
                    <Form.Item label="选择用户" {...formItemLayout}>
                        <Transfer
                            listStyle={{width: 200,height: 400}}
                            showSearch
                            dataSource={this.props.mockData}
                            targetKeys={this.props.targetKeys}
                            titles={['待选用户', '已选用户']}
                            searchPlaceholder='输入用户名'
                            filterOption={this.filterOption}
                        />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
RoleAuthForm = Form.create()(RoleAuthForm)