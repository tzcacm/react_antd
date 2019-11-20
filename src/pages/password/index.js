import React, { Fragment } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { changePassword } from '../login/store/reducer';
import './index.less';

const PasswordPage = (props) => {

    const { getFieldDecorator } = props.form;

    //提交
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                const { newPassWordTwo } = values;
                props.handlePassword(newPassWordTwo).then(() => {
                    message.success('修改密码成功');
                    localStorage.removeItem('tokenId');
                    window.location.replace('#/login')
                })
            }
        });
    }


    //自定义检验账号
    const checkOldPassword = (rule, value, callback) => {
        !value ? callback('请输入原密码') : callback();
    }

    //自定义检验密码
    const checkNewPasswordOne = (rule, value, callback) => {
        let oldPassword = props.form.getFieldValue('oldPassword');
        if (!value) {
            callback('请输入新密码')
        } else if (value === oldPassword) {
            callback('新旧密码不能一致')
        } else {
            callback();
        }
    }

    //自定义检验密码
    const checkNewPasswordTwo = (rule, value, callback) => {
        let newPassWordOne = props.form.getFieldValue('newPassWordOne');
        if (!value) {
            callback('请输入确认密码')
        } else if (value !== newPassWordOne) {
            callback('新密码不一致')
        } else {
            callback();
        }
    }

    return (
        <Fragment>
            <div className="password_box">
                <Form onSubmit={handleSubmit} className="password-form">
                    <Form.Item>
                        {getFieldDecorator('oldPassword', {
                            initialValue: '',
                            validateFirst: true,
                            rules: [{ validator: checkOldPassword }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="原密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('newPassWordOne', {
                            initialValue: '',
                            validateFirst: true,
                            rules: [{ validator: checkNewPasswordOne }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="新密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('newPassWordTwo', {
                            initialValue: '',
                            validateFirst: true,
                            rules: [{ validator: checkNewPasswordTwo }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="确认密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" className="login_button" htmlType="submit">修改密码</Button>
                    </Form.Item>
                </Form>
            </div>
        </Fragment>
    )
}

const mapToDispatch = ({
    handlePassword: (newPassword) => changePassword(newPassword)
})

export default connect(null, mapToDispatch)(Form.create({})(PasswordPage));