/*
 * @Author: zhimin
 * @Date: 2022-02-14 15:29:37
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 15:39:47
 * @FilePath: \zhimin_underscore\es6\generator\y.js
 */
function* foo () {
  yield 'a';
  yield 'b';
}
function* bar () {
  yield 'x';
  yield* foo();
  yield 'y';
}
var g = bar();
console.log(g.next());
console.log(g.next());