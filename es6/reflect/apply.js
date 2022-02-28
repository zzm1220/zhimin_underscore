/*
 * @Author: zhimin
 * @Date: 2022-02-10 16:35:01
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-10 16:37:37
 * @FilePath: \zhimin_underscore\es6\reflect\apply.js
 */
const ages = [11, 22, 333, 41, 24];
const youngest = Reflect.apply(Math.min, Math, ages);

console.log(youngest);