/*
 * @Author: zhimin
 * @Date: 2022-01-18 16:34:26
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-18 16:47:44
 * @FilePath: \zhimin_underscore\extend.js
 */
/**
 * 浅拷贝
 * @returns 
 */
function extend () {
  var options, name, copy;
  var args = arguments,
    length = arguments.length,
    i = 1,
    target = arguments[0];
  for (; i < length; i++) {
    options = args[i];
    if (options != null) {
      for (name in options) {
        copy = options[name];
        if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}