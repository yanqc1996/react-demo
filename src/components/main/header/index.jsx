import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Dropdown } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'
import './header.less'
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
  loginOut = () => {
    this.props.history.push('/') //控制路由进行跳转
  }
  render() {
    const { toggle } = this.props
    const {collapsed,menu}=this.state
    return (
      <div className="header">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'header-icon',
            onClick: toggle,
          }
        )}
        <div className="header-right">
          <span className="header-user">阿毛心怀宇宙</span>
          <Dropdown overlay={menu}>
            <PoweroffOutlined />
          </Dropdown>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {}

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = (dispatch) => {
  return {
    toggle: () => {
      const INCREASE = {
        type: 'increase',
      }
      dispatch(INCREASE)//根据INCREASE中的type触发action中的increase方法，触发menu中的数据数据变化
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(MainHeader))
