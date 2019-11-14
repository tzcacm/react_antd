import React from 'react';
import { Icon, Button } from 'antd';
import { connect } from 'react-redux';
import './index.less';

const HeaderComponent = (props) => {

    const toggleCollapsed = () => {
        props.toggleCollapsed(props.collapsed);
    }

    return (
        <div className="header_box">
            <Button type="primary" onClick={toggleCollapsed} className="header_button">
                <Icon type={props.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <div className="header_title">我是店长</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    collapsed: state.header.collapsed
});

const mapToDispatch = (dispatch) => ({
    toggleCollapsed: (collapsed) => {
        console.log(collapsed);
        const action = {
            type: 'change_collapsed',
            collapsed: !collapsed
        };
        dispatch(action);
    }
})




export default connect(mapStateToProps, mapToDispatch)(HeaderComponent);



