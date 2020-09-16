import React, { Component } from 'react'
//connet的作用就是与外部的Provide进行连接
import { connect } from 'react-redux'
import FormLogin from '@/components/login'
//引入login样式
import './login.less'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '阿毛心怀宇宙',
      version: 'v1.0.0',
    }
  }
  render() {
    const { title, version } = this.state
    return (
      <div className="login_box">
        <div className="content_box">
          <div className="content">
            <div className="left">
              <span className="title">{title}</span>
              <span className="edition">{version}</span>
              <br />
            </div>
            <div className="right">
              <span className="login_title">账号登陆</span>
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// state--store内的state
//建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
//mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射。
//mapStateToProps是一个函数，它接受state作为参数，返回一个对象
//这个对象有一个todos属性，代表 UI 组件的同名参数，后面的getVisibleTodos也是一个函数，可以从state算出 todos 的值。

const mapStateToProps = (state) => {
  return {}
}

// dispatch--调用store的方法，store.dispatch
//mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。
//它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
//是函数则会得到dispatch和ownProps（容器组件的props对象）两个参数。
//是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。
const mapDispathToProps = (dispatch) => {
  return {}
}

//这个方法就是将Login UI组件通过connect方法自动生成的容器组件
//connect方法接受两个参数：mapStateToProps和mapDispatchToProps。
//它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props）
//只负责 UI 的呈现，不带有任何业务逻辑，没有状态（即不使用this.state这个变量），所有数据都由参数（this.props）提供，不使用任何 Redux 的 API
//后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
export default connect(mapStateToProps, mapDispathToProps)(Login)
