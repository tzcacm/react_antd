import React, { Fragment, useReducer } from 'react';
import { Form, Icon, Button, Input, Row, Col } from 'antd';
import './index.less';
import { LoginReducer, initialState, changeLogin } from './store';


function LoginPage(props) {

    const { getFieldDecorator } = props.form;

    const [state, dispatch] = useReducer(LoginReducer, initialState);

    //提交
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                const { userName, passWord } = values;
                dispatch(changeLogin(userName, passWord, 'hello world'));
                localStorage.setItem('tokenId', 'hello word');
                props.history.push('./');
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

    return (
        <Fragment>
            <Row className="login_container">
                <Col md={{ span: 8, offset: 8 }} className="login_content">
                    <div className="login_title">欢迎登录 - 管理系统</div>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                initialValue: `${state.userName}`,
                                validateFirst: true,
                                rules: [{ validator: checkUserName }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="账号"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('passWord', {
                                initialValue: `${state.passWord}`,
                                validateFirst: true,
                                rules: [{ validator: checkPassword }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" className="login_button" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Form.create({})(LoginPage)