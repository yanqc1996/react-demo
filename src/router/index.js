import routes from './config'
//引入自定义路由组件数据
import React, { Component } from 'react'
import {
  HashRouter as Router,
  //BrowserRouter：服务端路由，需要后台进行配置
  //HashRouter:客户端路由
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

/*一级路由*/
class First extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => {
            if (route.auth) {
              //根据配置是否检测登录
              return (
                <PrivateRoute key={i} path={route.path}>
                  <route.component />
                </PrivateRoute>
              )
            } else {
              return <RouteWithSubRoutes key={i} {...route} />
            }
          })}
        </Switch>
      </Router>
    )
  }
}
/*二级路由*/
class SystemRouter extends Component {
  render() {
    return (
      <Switch>
        {routes[1].routes.map((route, i) => {
          if (route.auth) {
            //根据配置是否检测登录
            return (
              <PrivateRoute key={i} path={route.path}>
                <route.component />
              </PrivateRoute>
            )
          } else {
            return <RouteWithSubRoutes key={i} {...route} />
          }
        })}
      </Switch>
    )
  }
}

export {
  First,
  SystemRouter, //抛出一级，二级路由
}
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
/*嵌套路由函数组件*/
function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
/*登录检测路由方法,路由守卫函数组件*/
function PrivateRoute({ children, ...rest }) {
    // let isAuthenticated = sessionStorage.auth;
  let isAuthenticated = '123'
  //此处可以根据isAuthenticated参数来判断用户是否登陆，然后执行路由守卫
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
      //这一段话有点不是很懂，具体的作用类似Vue的路由守卫，存在路由参数则正常跳转，不存在则跳回登陆页面
    />
  )
}
