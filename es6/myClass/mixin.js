/*
 * @Author: zhimin
 * @Date: 2022-02-17 15:51:43
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-17 15:56:12
 * @FilePath: \zhimin_underscore\es6\myClass\mixin.js
 */
function min (...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin());
      }
    }
  }
  for (let mixin of mixins) {
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }
  return Mix;
}
function copyProperties (target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}