import React from 'react';
import './index.less';
import { menus } from '../../config/menu';
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';
import { connect } from 'react-redux';
const { SubMenu } = Menu;

const LayoutComponent = (props) => {

    const menupath = window.location.hash.substr(1);     //刷新页面时，获取location整体的路径==>'/home/one'
    const menuopen = `/${window.location.hash.substr(1).split('/')[1]}`;//刷新页面时，获取location单个的路径==>'/home'

    return (
        <Layout>
            <div className="layout_box" style={{ width: props.collapsed ? '100%' : '250px' }}>
                <div className="layout_logo">logo</div>
                <Menu
                    defaultSelectedKeys={[menupath]}
                    defaultOpenKeys={[menuopen]}
                    mode="inline"
                    inlineCollapsed={props.collapsed}
                >
                    {
                        menus.map(item => {
                            if (item['children']) {
                                return (
                                    <SubMenu
                                        key={item['path']}
                                        title={
                                            <span>
                                                <Link to={item['path']}>
                                                    <Icon type={item['icon']} />
                                                    <span>{item['title']}</span>
                                                </Link>
                                            </span>
                                        }
                                    >
                                        {
                                            item['children'].map(val => {
                                                return (
                                                    <Menu.Item key={val['path']}>
                                                        <Link to={val['path']}>{val['title']}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            } else {
                                return (
                                    <Menu.Item key={item['path']}>
                                        <Link to={item['path']}>
                                            <Icon type={item['icon']} />
                                            <span>{item['title']}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
            </div>
        </Layout>
    );
}

const mapStateToProps = (state) => ({
    collapsed: state.header.collapsed
})

export default connect(mapStateToProps, null)(LayoutComponent);
