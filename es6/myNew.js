/*
 * @Author: zhimin
 * @Date: 2022-02-09 10:58:57
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-09 11:04:49
 * @FilePath: \zhimin_underscore\es6\myNew.js
 */
/**
 * 模拟实现new操作
 * 1. 创建空对象obj
 * 2. 执行构造函数，将this指向构造函数
 * 3. 设置obj的[[prototype]]指向构造函数的prototype
 * 4. 返回obj
 * @returns obj;
 */
function myNew () {
  const Constructor = arguments[0],
    args = [...arguments].slice(1),
    obj = {};
  Constructor.apply(obj, args);
  // obj.__proto__ = Constructor.prototype;
  Object.setPrototypeOf(obj, Constructor.prototype);
  return obj;
}