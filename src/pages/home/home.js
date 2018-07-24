import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from './../../static/logo.png';
import "./home.scss"
//  import './index.css'
const { Header, Content, Footer, Sider } = Layout;

export default class Home extends Component {
    //初始化
    componentDidMount() {
        if (!sessionStorage.getItem("userinfo")) {
            this.props.history.push("/login")
        }
    }
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    theme="light"
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >

                    <div className="logo">
                        <img src={logo} alt="" style={{ width: 60 }} />
                    </div>

                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="appstore-o" />
                            <span className="nav-text">提现管理</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="setting" />
                            <span className="nav-text">提现设置</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <span className="fl" style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{ cursor: 'pointer' }}
                            />
                        </span>
                        <span style={{ color: '#333', paddingLeft: '2%', fontSize: '1.4em' }}>Information Management System</span>
                        {/* <span style={{color:'#fff', float:'left', paddingRight:'1%'}}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </span> */}
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                            {/* {this.props.children} */}
                            
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}