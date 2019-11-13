import React, { Component } from 'react';
import './index.less';
import { menus } from '../../config/menu';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'antd';
const { SubMenu } = Menu;

class LayoutComponent extends Component {

    constructor(props){
        super(props);
        // const { history } = props;
        console.log(props);
    }


    state = {
        collapsed: false,
    };

    render() {
        return (
            <div className="layout_box">
                <div className="layout_logo">logo</div>
                <Menu
                    defaultSelectedKeys={['/']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
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
        );
    }
}

export default LayoutComponent;
