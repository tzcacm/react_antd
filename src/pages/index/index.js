import React from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../../componets/layout';
import Header from '../../componets/header';
import { connect } from 'react-redux';
import './index.less';

const IndexPage = (props) => {

    if (!localStorage.getItem('tokenId')) {
        return <Redirect to="/login"></Redirect>
    } else {
        return (
            <div className="main_box">
                <div className="main_layout"><Layout></Layout></div>
                <div className="main_container" style={{ marginLeft: props.collapsed ? '80px' : '250px' }}>
                    <Header></Header>
                    <div className="main_content">
                        {props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    collapsed: state.header.collapsed
})


export default connect(mapStateToProps, null)(IndexPage);