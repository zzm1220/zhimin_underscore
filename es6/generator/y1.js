/*
 * @Author: zhimin
 * @Date: 2022-02-14 15:40:59
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 15:59:44
 * @FilePath: \zhimin_underscore\es6\generator\y1.js
 */
function* inner () {
  yield 'hello';
  yield 'world';
}
function* outer1 () {
  yield 'open';
  yield* inner();
  yield 'close';
}
var gen = outer1();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);