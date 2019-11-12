import React, { Component } from 'react';
import { Icon, Button } from 'antd';
// import { actionCreators } from './store';

class Header extends Component {

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="">
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <div>我是店长</div>
            </div>
        )
    }
}

export default Header;



