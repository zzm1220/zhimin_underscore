/*
 * @Author: zhimin
 * @Date: 2022-02-14 14:40:53
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 14:43:11
 * @FilePath: \zhimin_underscore\es6\generator\it.js
 */
function* foo () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}
for (let v of foo()) {
  console.log(v);
}