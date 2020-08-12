import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
//connet的作用就是与外部的Provide进行连接
import { connect } from 'react-redux'
import { Menu } from 'antd'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import './menu.less'
const { SubMenu } = Menu

class LeftMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'inline',
      theme: 'dark',
      menuList: [
        {
          key: '1',
          name: '健康度评估',
          icon: <MailOutlined />,
          children: [
            {
              key: '7',
              name: '多维健康度',
              icon: <AppstoreOutlined />,
              path: '/main/multiHealth',
            },
            {
              key: '8',
              name: '小区健康度',
              icon: <CalendarOutlined />,
              path: '/main/communHealth',
            },
            {
              key: '9',
              name: '网络诊断',
              icon: <SettingOutlined />,
              path: '/main/netDiagnosis',
            },
            {
              key: '10',
              name: '网络自评估',
              icon: <CalendarOutlined />,
              path: '/main/netAssessment',
            },
            {
              key: '11',
              name: '网络事件配置',
              icon: <SettingOutlined />,
              path: '/main/netEvent',
            },
          ],
        },
        {
          key: '2',
          name: '系统管理',
          icon: <AppstoreOutlined />,
          children: [
            {
              key: '4',
              name: '用户中心',
              icon: <AppstoreOutlined />,
              path: '/main/personalCenter',
            },
            {
              key: '5',
              name: '个人中心',
              icon: <CalendarOutlined />,
              path: '/main/userCenter',
            },
          ],
        },
      ],
    }
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
  changeItem = (value) => {
    this.props.history.push(value.key) //控制路由进行跳转
  }
  render() {
    return (
      <Menu
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={this.state.mode}
        theme={this.state.theme}
        onClick={this.changeItem}
      >
        {this.state.menuList.map((item) =>
          item.children ? (
            <SubMenu key={item.key} icon={item.icon} title={item.name}>
              {item.children.map((inner) => (
                <Menu.Item key={inner.path} icon={inner.icon}>
                  {inner.name}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.path} icon={item.icon}>
              {item.name}
            </Menu.Item>
          )
        )}
      </Menu>
    )
  }
}
// state--store内的state
const mapStateToProps = (state) => {
  return {}
}

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispathToProps)(withRouter(LeftMenu))
