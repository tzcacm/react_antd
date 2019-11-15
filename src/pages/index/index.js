import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../../componets/layout';
import Header from '../../componets/header';
import './index.less';

class IndexPage extends Component {

    render() {
        // 监听路由
        if (!localStorage.getItem('tokenId')) {
            return <Redirect to="/login"></Redirect>
        } else {
            return (
                <div className="main_box">
                    <div><Layout></Layout></div>
                    <div className="main_container">
                        <Header></Header>
                        <div className="main_content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            )
        }
    }


}


export default IndexPage