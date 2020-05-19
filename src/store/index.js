import { createStore, compose ,applyMiddleware} from "redux";
// redux-thunk:是action和store的中间件，用来处理异步函数;包括applyMiddleware
import thunk from 'redux-thunk';
import reducer from "./reducer";

// 配置控制台redux-devtools--包括compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
