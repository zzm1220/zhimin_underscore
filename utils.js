/*
 * @Author: zhimin
 * @Date: 2022-01-19 16:25:14
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-20 14:25:19
 * @FilePath: \zhimin_underscore\utils.js
 */
/**
* 常用工具函数
 */
const myUtils = (function () {
  const utils = {
    /**
    * 查询字符串参数格式化为对象
     */
    getQueryArgs: function () {
      let search = window.location.search;
      let args = {};
      let qs = search.length > 0 ? search.slice(1) : "";
      const items = qs.split('&').map(kv => kv.split('='));
      for (let item of items) {
        let name = decodeURIcomponent(item[0]);
        let value = decodeURIcomponent(item[1]);
        if (name.length) {
          args[name] = value;
        }
      }
      return args;
    },
    // 能力检测 
  }
  return utils;
})();