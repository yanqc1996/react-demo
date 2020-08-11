import React, { Component } from 'react'
import { Avatar, Menu, Dropdown } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'
import './header.less'
const menu = (
  <Menu>
    <Menu.Item>
      <PoweroffOutlined style={{ color: '#F2BE21' }} />
      版本日志
    </Menu.Item>
    <Menu.Item>
      <PoweroffOutlined style={{ color: 'red' }} />
      退出
    </Menu.Item>
  </Menu>
)
class MainHeader extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
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
          <Dropdown overlay={menu}>
            <PoweroffOutlined />
          </Dropdown>
        </div>
      </div>
    )
  }
}
export default MainHeader
