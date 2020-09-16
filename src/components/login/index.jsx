import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

class FormLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnLoading: false,
    }
  }
  render() {
    return (
      <Form
        name="normal_login"
        className="login_form"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login_form_button"
            loading={this.state.btnLoading}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    )
  }

  onFinish = (values) => {
    this.setState(
      () => ({
        btnLoading: true,
      }),
      () => {
        setTimeout(() => {
          this.setState(() => ({
            btnLoading: false,
          }))
          this.props.history.push('/main/multiHealth') //控制路由进行跳转
        }, 1000)
      }
    )
  }
}
export default withRouter(FormLogin)
