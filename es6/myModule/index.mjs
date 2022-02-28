/*
 * @Author: zhimin
 * @Date: 2022-02-21 14:01:47
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-21 16:16:29
 * @FilePath: \zhimin_underscore\es6\myModule\index.mjs
 */
import {
  firstName,
  lastName,
  year,
  multiply
} from './profile.mjs';
import say, * as circle from './cricle.mjs';
import { db, users } from './utils/index.mjs';
console.log(firstName, lastName, year);
console.log(multiply(2, 3));
setTimeout(() => {
  console.log(year);
}, 1000);
console.log('圆的面积：' + circle.area(3));
console.log(circle);
// console.log(circle.obj);
circle.default('hello world');
say('你好');
console.log(db, users);