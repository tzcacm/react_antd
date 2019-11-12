import React from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../../componets/layout';
import Header from '../../componets/header';
import './index.less';

const IndexPage = (props) => {

    if (!localStorage.getItem('tokenId')) return <Redirect to="/login"></Redirect>

    return (
        <div className="main_box">
            <div><Layout></Layout></div>
            <div class="main_container">
                <Header></Header>
                <div>{props.children}</div>
            </div>
        </div>
    )
}


export default IndexPage;