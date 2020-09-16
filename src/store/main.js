/*
 * @Author: your name
 * @Date: 2020-08-13 10:39:05
 * @LastEditTime: 2020-09-16 14:40:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-demo/src/store/main.js
 */
// 初始化state数据
const initialState = {
    menuCollapsed: false,
}

// 通过dispatch action进入
export default function main(state = initialState, action) {
    // 根据不同的action type进行state的更新
    switch (action.type) {
        case 'increase':
            return Object.assign({}, state, {
                menuCollapsed: !state.menuCollapsed
            })
        default:
            return state
    }
}