
import { combineReducers } from "redux";
//把不同store文件合并到reducer
import main from './main' // 主页数据

const reducer = combineReducers({
  main
});

export default reducer;
