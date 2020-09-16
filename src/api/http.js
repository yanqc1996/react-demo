/*
 * @Author: your name
 * @Date: 2020-05-19 11:31:50
 * @LastEditTime: 2020-09-13 10:50:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-demo/src/api/http.js
 */
/**
 * @description axios二次封装（请求延时时间，拦截器等）
 * @author yanqc
 * @date 2019/10/30
 */
import axios from 'axios';
import qs from 'qs';
import router from '../../router';

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

const services = axios.create({
    timeout: 120000, // 请求延时时间
    withCredentials: false
});

// 需要忽略掉的请求参数，可根据实际需要更改
const ignoreParams = [null, undefined, ""];

// status -> message
const ERROR_MAPPING_MESSAGE = {
    400: '错误请求',
    401: '未授权，请重新登录',
    403: '拒绝访问',
    404: '请求错误,未找到该资源',
    405: '请求方法未允许',
    408: '请求超时',
    500: '服务器端出错',
    501: '网络未实现',
    502: '网络错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'http版本不支持该请求'
};

// 请求拦截器
services.interceptors.request.use(config => {
    // 去掉需要忽略的请求参数（数据）
    let _configParams = config.params,
        _params = {};
    for (var column in _configParams) {
        if (ignoreParams.every(item => item !== _configParams[column])) {
            _params[column] = _configParams[column];
        }
    }
    config.params = _params;

    if (config.method === "get") {
        config.paramsSerializer = function(params) {
            return qs.stringify(params, { indices: false });
        };
    }

    if (config.url.indexOf("login") < 0) {
        let userId = sessionStorage.getItem("userId");
        config.headers['X-XSRF-TOKEN'] = userId;
    }
    return config;
}, err => {
    return Promise.reject(err);
});

// 响应拦截器
services.interceptors.response.use(config => {
    return config.data;
}, err => {
    let _message = "连接到服务器失败",
        _retCode = 0,
        _response;

    if (err && (_response = err.response)) {
        _retCode = err.response.status;
        _message = ERROR_MAPPING_MESSAGE[`${err.response.status}`];
        if (_retCode === 212) {
            // 212是与后台约定好的
            // 用于后台拒绝时，弹出拒绝理由
            _message = _response.data.message;
        }
        
        if (_retCode === 416) {
            // 416为登录失效
            sessionStorage.removeItem("token");
            router.push({
                path: "/login",
                query: {
                    sessionIsInvalid: true
                }
            });
        }
    }
    return Promise.resolve({
        retCode: _retCode,
        data: {},
        retMsg: _message
    });
});

export default services;