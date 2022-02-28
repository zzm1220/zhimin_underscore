/*
 * @Author: zhimin
 * @Date: 2022-02-10 10:36:32
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-10 10:37:37
 * @FilePath: \zhimin_underscore\es6\proxy\apply\apply.js
 */
var target = function () {
  return 'this is target function';
};
var handler = {
  apply () {
    return 'this is apply function';
  }
};
var p = new Proxy(target, handler);
console.log(p());