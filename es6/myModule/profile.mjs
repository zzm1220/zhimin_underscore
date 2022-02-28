/*
 * @Author: zhimin
 * @Date: 2022-02-21 13:59:31
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-21 14:45:06
 * @FilePath: \zhimin_underscore\es6\myModule\profile.mjs
 */
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
export function multiply (x, y) {
  return x * y;
}
setTimeout(() => {
  year = year + 1;
}, 500);