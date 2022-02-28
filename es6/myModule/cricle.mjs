/*
 * @Author: zhimin
 * @Date: 2022-02-21 14:57:49
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-21 15:23:32
 * @FilePath: \zhimin_underscore\es6\myModule\cricle.mjs
 */
export function area (radius) {
  return Math.PI * radius * radius;
}
export function circumference (radius) {
  return 2 * Math.PI * radius;
}
export var obj = {
  name: 'zhi',
  age: 22
}
export default function (ctx) {
  console.log(ctx);
}