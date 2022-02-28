/*
 * @Author: zhimin
 * @Date: 2022-02-09 17:39:59
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-10 09:54:36
 * @FilePath: \zhimin_underscore\es6\proxy\dom.js
 */
const dom = new Proxy({}, {
  get (target, property) {
    return function (attrs = {}, ...children) {
      // 根据property创建元素节点
      const el = document.createElement(property);
      // 获取属性key数组
      var attrKeys = Object.keys(attrs);
      // 设置元素属性
      for (let key of attrKeys) {
        el.setAttribute(key, attrs[key]);
      }
      for (let child of children) {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        el.appendChild(child);
      }
      return el;
    }
  }
});