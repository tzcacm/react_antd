import React, {
    Fragment
} from 'react';
import './index.less';
import {
    Form,
    Icon,
    Button,
    Input,
    Row,
    Col,
    message
} from 'antd';
import {
    login
} from './store/reducer';
import {
    connect
} from 'react-redux';

function LoginPage(props) {

    const {
        getFieldDecorator
    } = props.form;

    //提交
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                const {
                    userName,
                    passWord
                } = values;
                props.handleLogin(userName, passWord, 'hello world').then(res => {
                    message.success('登录成功');
                    localStorage.setItem('tokenId', 'hello word');
                    props.history.replace('./');
                });
            }
        });
    }

    //自定义检验账号
    const checkUserName = (rule, value, callback) => {
        !value ? callback('请输入账号') : callback();
    }

    //自定义检验密码
    const checkPassword = (rule, value, callback) => {
        !value ? callback('请输入密码') : callback();
    }

    return ( <
            Fragment >
            <
            Row className = "login_container" >
            <
            Col md = {
                {
                    span: 8,
                    offset: 8
                }
            }
            className = "login_content" >
            <
            div className = "login_title" > 欢迎登录 - 管理系统 < /div> <
            Form onSubmit = {
                handleSubmit
            }
            className = "login-form" >
            <
            Form.Item > {
                getFieldDecorator('userName', {
                    initialValue: `${props.userName}`,
                    validateFirst: true,
                    rules: [{
                        validator: checkUserName
                    }],
                })( <
                    Input prefix = {
                        < Icon type = "user"
                        style = {
                            {
                                color: 'rgba(0,0,0,.25)'
                            }
                        }
                        />}
                        placeholder = "账号" /
                        > ,
                    )
                } <
                /Form.Item> <
                Form.Item > {
                    getFieldDecorator('passWord', {
                        initialValue: `${props.passWord}`,
                        validateFirst: true,
                        rules: [{
                            validator: checkPassword
                        }],
                    })( <
                        Input prefix = {
                            < Icon type = "lock"
                            style = {
                                {
                                    color: 'rgba(0,0,0,.25)'
                                }
                            }
                            />}
                            type = "password"
                            placeholder = "密码" /
                            > ,
                        )
                    } <
                    /Form.Item> <
                    Form.Item >
                    <
                    Button type = "primary"
                    className = "login_button"
                    htmlType = "submit" >
                    登录 <
                    /Button> <
                    /Form.Item> <
                    /Form> <
                    /Col> <
                    /Row> <
                    /Fragment>
                )
            }

            //获取redux登录信息
            const mapStateToProps = (state) => ({
                userName: state.login.userName,
                passWord: state.login.passWord
            })

            //设置redux设置登录
            const mapToDispatch = ({
                handleLogin: (userName, passWord, tokenId) => login(userName, passWord, tokenId)
            })

            export default connect(mapStateToProps, mapToDispatch)(Form.create({})(LoginPage))