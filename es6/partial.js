/*
 * @Author: zhimin
 * @Date: 2022-02-08 14:43:51
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-08 14:43:57
 * @FilePath: \zhimin_underscore\es6\partial.js
 */
const partial = (func, ...args) => {
  return (...rest) => {
    return func.apply(this, [...args, ...rest]);
  }
}