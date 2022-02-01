/*
 * @Author: zhimin
 * @Date: 2022-01-26 17:30:36
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-26 17:52:52
 * @FilePath: \zhimin_underscore\underscore\type.js
 */
(function () {
  var class2type = {};
  "Boolean String Number Function Array Date RegExp Error Object".split(' ')
    .map(function (item) {
      class2type['[object ' + item + ']'] = item.toLocaleLowerCase();
    });
  /**
   * 返回数据类型
   * @param {*} obj 
   * @returns 
   */
  this.type = function (obj) {
    if (obj == null) {
      return obj + '';
    }
    return typeof obj === 'object' || typeof obj === 'function' ?
      class2type[Object.prototype.toString.call(obj)] || 'object' :
      typeof obj;
  }
  /**
   * 判断是否是函数
   * @param {*} fn 
   * @returns Boolean
   */
  this.isFunction = function (fn) {
    return this.type(fn) === 'function';
  }
  /**
   * 判断是否为数组
   */
  this.isArray = Array.isArray || function (obj) {
    return type(obj) === 'array';
  }
  this.isPlainObject = function (obj) {
    var proto, Ctor;
    if (!obj || Object.prototype.toString.call(obj) !== '[Object object]') {
      return false;
    }
    proto = Object.getPrototypeOf(obj);
    if (!proto) {
      return true;
    }
    Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor === 'function' && 
  }
})();