// reducers/count.js
// import {
//     INCREASE,
// } from './constants' // 引入action类型常量名

// 初始化state数据
const initialState = {
    menuCollapsed: true,
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