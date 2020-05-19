import React, { Component } from "react";
// 引入路由
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// // 引入ant样式
import 'antd/dist/antd.css';

// // 引入重置样式
import '@/assets/css/reset.css';
//引入全局样式
import '@/index.less';

// //引入组件
import Login from "./pages/login"; //登陆
import Main from "./pages/main"; //main
import Home from "./pages/home"; //首页

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
