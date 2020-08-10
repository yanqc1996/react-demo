import React, { Component } from 'react'
// 引入路由
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
// 引入ant样式
import 'antd/dist/antd.css'
// 引入Provider组件，主要是为子组件和store做一个中间传值的功能
import { Provider } from 'react-redux'
// 将store引入
import store from './store'

// 引入充值样式
import '@/assets/css/reset.css'

//引入组件
import Login from './pages/login' //登陆
import Main from './pages/main' //main
import Home from './pages/home' //首页

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/main"></Redirect>}
            ></Route>
            <Route
              path="/main"
              render={() => (
                <Main>
                  <Route path="/main/home" component={Home}></Route>
                </Main>
              )}
            ></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
