/*
 * @Author: zhimin
 * @Date: 2022-02-24 17:31:49
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-25 10:35:10
 * @FilePath: \zhimin_underscore\es6\mySymbol\index.js
 */
let s = Symbol();
console.log(typeof s);
class MyArray extends Array {
  static get [Symbol.species] () {
    return Array;
  }
}
const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);
console.log(b instanceof MyArray);
console.log(c instanceof MyArray);
console.log(b instanceof Array);