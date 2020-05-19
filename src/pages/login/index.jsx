import React, { Component } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
//引入login样式
import "./less/login.less";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
    };
  }
  render() {
    return (
      <div className="login_box">
        <div className="content_box">
          <div class="logo">
            <img src={[require("../../assets/images/login/logo.png")]} alt="" />
          </div>
          <div class="content">
            <div class="left">
              <span class="title">智慧运维管理平台</span>
              <span class="edition">v0.0.1</span>
              <br />
              <span class="english">
                WIRELESS RESOURCE REAL-TIME MANAGEMENT PLATFORM
              </span>
            </div>
            <div class="right">
              <span class="login_title">账号登陆</span>
              <Form
                name="normal_login"
                className="login_form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish.bind(this)}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "请输入用户名!" }]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "请输入密码!" }]}
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  onFinish = (values) => {
    console.log("Received values of form: ", values);
    this.setState(
      () => ({
        btnLoading: true,
      }),
      () => {
        setTimeout(() => {
          this.setState(() => ({
            btnLoading: false,
          }));
        }, 1000);
      }
    );
  };
}

// state--store内的state
const mapStateToProps = (state) => {};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispathToProps)(Login);
