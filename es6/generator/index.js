/*
 * @Author: zhimin
 * @Date: 2022-02-14 10:00:54
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 10:06:02
 * @FilePath: \zhimin_underscore\es6\generator\index.js
 */
function* hellowGenerator () {
  yield 'hello';
  yield 'world';
  return 'ending';
}
const it = hellowGenerator();
console.log(it.next());