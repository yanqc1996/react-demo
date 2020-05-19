// 引入type的常量
import { constants } from "./index";

const defaultState = {
  bannerList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    // 接受传过来的action.type;
    case constants.GET_BANNERS:
      // 返回格式按immutable的格式
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象；并非对原数据进行了修改
      return state.set("bannerList", action.data);
    default:
      return state;
  }
};
