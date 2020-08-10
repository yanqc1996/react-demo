import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
//connet的作用就是与外部的Provide进行连接
import { connect } from 'react-redux'
import './less/main.less'
import { Menu, Switch, Divider } from 'antd'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu

class Main extends Component {
  state = {
    mode: 'inline',
    theme: 'light',
    menuList: [
      {
        key: '1',
        name: 'menu1',
        icon:MailOutlined
      },
      {
        key: '2',
        name: 'menu1',
        icon:AppstoreOutlined
      },
      {
        key: '3',
        name: 'menu1',
        icon:CalendarOutlined
      },
      {
        key: '4',
        name: 'menu1',
        icon:SettingOutlined
      },
      {
        key: '5',
        name: 'menu1',
        icon:LinkOutlined
      },
      {
        key: '6',
        name: 'menu1',
        icon:MailOutlined,
        children: [
          {
            key: '7',
            name: 'menu7',
            icon:AppstoreOutlined
          },
          {
            key: '8',
            name: 'menu8',
            icon:CalendarOutlined
          },
          {
            key: '9',
            name: 'menu9',
            icon:SettingOutlined
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
      <>
        <Switch onChange={this.changeMode} /> Change Mode
        <Divider type="vertical" />
        <Switch onChange={this.changeTheme} /> Change Style
        <br />
        <br />
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          {this.state.menuList.map((item) =>
            item.children ? (
              <SubMenu
                key={item.key}
                icon={<AppstoreOutlined />}
                title={item.name}
              >
                {item.children.map((inner) => (
                  <Menu.Item key={inner.key} icon={<MailOutlined />}>
                    {inner.name}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={<MailOutlined />}>
                {item.name}
              </Menu.Item>
            )
          )}
        </Menu>
      </>
    )
  }
}

// state--store内的state
const mapStateToProps = (state) => {}

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Main))
