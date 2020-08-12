import React, { Component } from 'react'
// 引入路由
// 引入ant样式
import 'antd/dist/antd.css'
// 引入Provider组件，主要是为子组件和store做一个中间传值的功能
//connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
//React-Redux 提供Provider组件，可以让容器组件拿到state。
import { Provider } from 'react-redux'
//react-reduc:将组件分为UI组件和容器组件，UI组件由用户提供，容器组件由React-Redux自动生成，用户负责视觉层，状态管理由react-redux负责
// 将store引入
import store from './store'
import { First } from '@/router/index'
// 引入重置样式
import '@/assets/css/reset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了 */}
        <First></First>
      </Provider>
    )
  }
}

export default App
