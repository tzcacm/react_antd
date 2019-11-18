import React, { Fragment } from 'react';
import { Icon, Button, Avatar, Popover } from 'antd';
import { connect } from 'react-redux';
import { exitLogin } from '../../../src/pages/login/store/reducer';
import './index.less';

const HeaderComponent = (props) => {

    const content = (
        <Fragment>
            <div className="popover_box" onClick={props.exitLogin}>
                <Icon type="export" className="popover_Icon"></Icon>
                <div className="popover_title">退出登录</div>
            </div>
        </Fragment>
    );

    const toggleCollapsed = () => {
        props.toggleCollapsed(props.collapsed);
    }

    return (
        <div className="header_box">
            <Button type="primary" onClick={toggleCollapsed} className="header_button">
                <Icon type={props.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>

            <Popover content={content} arrowPointAtCenter placement="top" trigger="hover">
                <div className="header_setting">
                    <Avatar size={36} icon="github" />
                    <div className="header_title">我是店长</div>
                    <Icon type="caret-down"></Icon>
                </div>
            </Popover>
        </div>
    )
}

const mapStateToProps = (state) => ({
    collapsed: state.header.collapsed
});

const mapToDispatch = (dispatch) => ({
    // 切换Menu的状态
    toggleCollapsed: (collapsed) => {
        const action = {
            type: 'change_collapsed',
            collapsed: !collapsed
        };
        dispatch(action);
    },
    //退出登录
    exitLogin: () => dispatch(exitLogin())
})




export default connect(mapStateToProps, mapToDispatch)(HeaderComponent);



