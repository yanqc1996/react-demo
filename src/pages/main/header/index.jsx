import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Avatar, Menu, Dropdown } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'
import './header.less'
// const menu = (
//   <Menu>
//     <Menu.Item>
//       <PoweroffOutlined style={{ color: '#F2BE21' }} />
//       版本日志
//     </Menu.Item>
//     <Menu.Item>
//       <PoweroffOutlined style={{ color: 'red' }} />
//       退出
//     </Menu.Item>
//   </Menu>
// )
class MainHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      menu: (
        <Menu>
          <Menu.Item>
            <PoweroffOutlined style={{ color: '#F2BE21' }} />
            版本日志
          </Menu.Item>
          <Menu.Item onClick={this.loginOut}>
            <PoweroffOutlined style={{ color: 'red' }} />
            退出
          </Menu.Item>
        </Menu>
      ),
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  loginOut = () => {
    this.props.history.push('/') //控制路由进行跳转
  }
  render() {
    return (
      <div className="header">
        {React.createElement(
          this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'header-icon',
            onClick: this.toggle,
          }
        )}
        <div className="header-right">
          <Avatar size="small" icon={<UserOutlined />} />
          <span className="header-user">浙江ict</span>
          <Dropdown overlay={this.state.menu}>
            <PoweroffOutlined />
          </Dropdown>
        </div>
      </div>
    )
  }
}
export default withRouter(MainHeader)
