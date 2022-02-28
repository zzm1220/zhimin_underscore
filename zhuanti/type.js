/*
 * @Author: zhimin
 * @Date: 2022-02-25 17:16:26
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-25 17:38:32
 * @FilePath: \zhimin_underscore\zhuanti\type.js
 */
var class2type = {};
"Boolean Number String Null Undefined Object Array Function Date RegExp Error".split(' ')
  .forEach(function (item, index) {
    class2type['[object ' + item + ']'] = item.toLowerCase();
  });

function type (obj) {
  if (obj == null) {
    return obj + '';
  }
  return typeof obj === 'object' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof Obj;
}

function isFunction (fn) {
  return type(fn) === 'function';
}

var isArray = Array.isArray || function (arr) {
  return type(arr) === 'array';
}