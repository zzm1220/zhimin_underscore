/*
 * @Author: zhimin
 * @Date: 2022-02-14 10:19:37
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 15:18:48
 * @FilePath: \zhimin_underscore\es6\generator\lazyAdd.js
 */
function* add (a, b) {
  console.log(1)
  yield a + b;
  console.log(2);
  yield a - b;
}
var sum = add(1, 2);
console.log(sum.next());
console.log(sum.next());
