import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
//connet的作用就是与外部的Provide进行连接
import { SystemRouter } from '@/router/index'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import LeftMenu from './menu'
import MainBread from '@/components/main/mainBread'//面包屑标题头
import MainHeader from './header'
import './main.less'
const { Header, Sider, Content } = Layout

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Layout className="main-layout">
          <Sider width={'220px'}>
            <div className="menu-logo">无线基站态势感知工具</div>
            <LeftMenu></LeftMenu>
          </Sider>
          <Layout>
            <Header className="main-header">
              <MainHeader></MainHeader>
            </Header>
            <Content>
              <div className="main-router">
                <MainBread></MainBread>
                <div className='router-inner'>
                <SystemRouter />
                </div>
                {/* 二层路由嵌套 */}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Main))
