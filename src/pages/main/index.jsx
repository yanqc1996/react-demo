import React, { Component } from 'react'
//connet的作用就是与外部的Provide进行连接
import { SystemRouter } from '@/router/index'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import LeftMenu from '@/components/main/menu' //左侧菜单栏
import MainBread from '@/components/main/mainBread' //面包屑标题头
import MainHeader from '@/components/main/header' //头部
import './main.less'
const { Header, Sider, Content } = Layout

class Main extends Component {
  render() {
    const { menuCollapsed } = this.props
    const src = require('@/assets/images/main/menu.png')
    let userMessage
    if (!menuCollapsed) {
      userMessage = <span>阿毛心怀宇宙</span>
    } else {
      userMessage = <img class="menu-img" src={src} alt=""></img>
    }
    return (
      <div className="main">
        <Layout className="main-layout">
          <Sider width={'220px'} collapsible trigger={null} collapsed={menuCollapsed}>
            <div className="menu-logo">
              {userMessage}
            </div>
            <LeftMenu></LeftMenu>
          </Sider>
          <Layout>
            <Header className="main-header">
              <MainHeader></MainHeader>
            </Header>
            <Content>
              <div className="main-router">
                <MainBread></MainBread>
                <div className="router-inner">
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
  return {
    menuCollapsed: state.main.menuCollapsed, //该数据显示将store中的某个数据映射到组件的props中，可以动态变化数据
  }
}
// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispathToProps)(Main)
