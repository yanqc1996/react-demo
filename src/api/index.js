/**
 * @description 基础api配置对象
 * @author yanqc
 * @date 2019/10/30
 */
import axios from './http';
import { Message } from 'antd';

class BaseApi {
    constructor() {
        this.prefix = "/api"; // 前缀，用于接口的分发
        this.axios = axios; // 直接使用axios的api
    }

    _doRequest_$1(method = "get", url, params, config, successText) {
        /**
         * @description 执行请求$1（get方式）
         * @param {string} method 指定的请求方式，默认值为"get"
         * @param {string} url 接口的url
         * @param {object} params 请求参数
         * @param {object} config 请求配置（config.headers）
         * @param {string} successText 请求成功提示的信息，值为"-1"时，即不需要提示
         * @returns {object} promise对象
         */
        return new Promise(resolve => {
            axios[method](url, {
                params
            }, config).then(res => {
                if (res.retCode !== 200) {
                    Message.warning(res.retMsg); // 失败提示
                } else if (successText !== "-1") {
                    Message.success(successText); // 成功提示
                } 
                resolve(res);
            });
        });
    }

    _doRequest_$2(method = "post", url, data, config, successText) {
        /**
         * @description 执行请求$2（post方式 ｜ put方式 ｜ delete方式）
         * @param {string} method 指定的请求方式，默认值为"post"
         * @param {string} url 接口的url
         * @param {object} data 提交的数据
         * @param {object} config 请求配置（config.headers）
         * @param {string} successText 请求成功提示的信息，值为"-1"时，即不需要提示
         * @returns {object} promise对象
         */
        return new Promise(resolve => {
            axios[method](url, data, config).then(res => {
                if (res.retCode !== 200) {
                    Message.warning(res.retMsg); // 失败提示
                } else if (successText !== "-1") {
                    Message.success(successText); // 成功提示
                }
                resolve(res);
            });
        });
    }

    get(url, params = {}, { config = {}, successText = "-1" } = { config: {}, successText: "-1" }) {
        /**
         * @description get方式
         * @param {string} url 接口的url
         * @param {object} params 请求参数
         * @param {object} config 请求配置（config.headers）
         * @param {string} successText 请求成功提示的信息，默认值为"-1"，即不需要提示
         * @returns {object} promise对象
         */
        return this._doRequest_$1("get", url, params, config, successText);
    }

    delete(url, id, { config = {}, successText = "-1" } = { config: {}, successText: "-1" }) {
        /**
         * @description delete方式
         * @param {string} url 接口的url
         * @param {number} id 要删除的记录的id
         * @param {object} config 请求配置（config.headers）
         * @param {string} successText 请求成功提示的信息，默认值为"-1"，即不需要提示
         * @returns {object} promise对象
         */
        let _url = `${url}/${id}`;
        return this._doRequest_$2("delete", _url, {}, config, successText);
    }

    post(url, data, { config = {}, successText = "-1" } = { config: {}, successText: "-1" }) {
        /**
         * @description post方式
         * @param {string} url 接口的url
         * @param {object} data 提交的数据
         * @param {object} config 请求配置（config.headers）
         * @param {string} successText 请求成功提示的信息，默认值为"-1"，即不需要提示
         * @returns {object} promise对象
         */
        return this._doRequest_$2("post", url, data, config, successText);
    }

    put(url, data, { config = {}, successText = "-1" } = { config: {}, successText: "-1" }) {
        /**
         * @description put方式
         * @param {string} url 接口的url
         * @param {object} data 提交的数据
         * @param {object} config 请求配置（config.headers）
         * @param {string} successText 请求成功提示的信息，默认值为"-1"，即不需要提示
         * @returns {object} promise对象
         */
        return this._doRequest_$2("put", url, data, config, successText);
    }

    create(formData, successText = "创建成功！") {
        /**
         * @description 新增记录
         * @param {object} formData 新增表单数据
         * @param {string} successText 请求成功提示的信息，默认值为"创建成功！"
         * @returns {object} promise对象
         */
        let _url = `${this.prefix}${this.baseUrl}`;
        return this.post(_url, formData, { successText });
    }

    remove(id, successText = "删除成功！") {
        /**
         * @description 删除记录
         * @param {number} id 记录id
         * @param {string} successText 请求成功提示的信息，默认值为"删除成功！"
         * @returns {object} promise对象
         */
        let _url = `${this.prefix}${this.baseUrl}`;
        return this.delete(_url, id, { successText });
    }

    modify(formData, successText = "修改成功！") {
        /**
         * @description 修改记录
         * @param {object} formData 修改表单数据
         * @param {string} successText 请求成功提示的信息，默认值为"修改成功！"
         * @returns {object} promise对象
         */
        let _url = `${this.prefix}${this.baseUrl}`;
        return this.put(_url, formData, { successText });
    }

    page(params = {}) {
        /**
         * @description 获取分页表格信息
         * @param {object} 请求参数（包含分页请求参数）
         * @returns {object} promise对象
         */
        let _url = `${this.prefix}${this.baseUrl}`;
        return this.get(_url, params);
    }

    detail(id) {
        /**
         * @description 记录详情信息
         * @param {number} id 记录id
         * @returns {object} promise对象
         */
        let _url = `${this.prefix}${this.baseUrl}/${id}`;
        return this.get(_url);
    }
}

export default BaseApi;