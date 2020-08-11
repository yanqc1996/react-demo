import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
//connet的作用就是与外部的Provide进行连接
import { connect } from 'react-redux'

import { Layout } from 'antd'

import './main.less'
import LeftMenu from './menu'
import MainHeader from './header'
const { Header, Sider, Content } = Layout

class Main extends Component {
  render() {
    return (
      <div class="main">
        <Layout className='main-layout'>
          <Sider width={'220px'}>
            <div className='menu-logo'>无线基站态势感知工具</div>
            <LeftMenu></LeftMenu>
          </Sider>
          <Layout>
            <Header className='main-header'>
              <MainHeader></MainHeader>
            </Header>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

// state--store内的state
const mapStateToProps = (state) => {}

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Main))
