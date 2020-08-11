import React, { Component } from 'react'
import { Menu } from 'antd'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons'
import './menu.less'
const { SubMenu } = Menu

class LeftMenu extends Component {
  state = {
    mode: 'inline',
    theme: 'dark',
    menuList: [
      {
        key: '1',
        name: 'menu1',
        icon: <MailOutlined />,
      },
      {
        key: '2',
        name: 'menu1',
        icon: <AppstoreOutlined />,
      },
      {
        key: '3',
        name: 'menu1',
        icon: <CalendarOutlined />,
      },
      {
        key: '4',
        name: 'menu1',
        icon: <SettingOutlined />,
      },
      {
        key: '5',
        name: 'menu1',
        icon: <LinkOutlined />,
      },
      {
        key: '6',
        name: 'menu1',
        icon: <MailOutlined />,
        children: [
          {
            key: '7',
            name: 'menu7',
            icon: <AppstoreOutlined />,
          },
          {
            key: '8',
            name: 'menu8',
            icon: <CalendarOutlined />,
          },
          {
            key: '9',
            name: 'menu9',
            icon: <SettingOutlined />,
          },
        ],
      },
    ],
  }

  changeMode = (value) => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    })
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  }

  render() {
    return (
        <Menu
          style={{ width: '100%' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          {this.state.menuList.map((item) =>
            item.children ? (
              <SubMenu key={item.key} icon={item.icon} title={item.name}>
                {item.children.map((inner) => (
                  <Menu.Item key={inner.key} icon={inner.icon}>
                    {inner.name}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.name}
              </Menu.Item>
            )
          )}
        </Menu>
    )
  }
}
export default LeftMenu
