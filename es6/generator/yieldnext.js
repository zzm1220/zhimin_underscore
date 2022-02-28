/*
 * @Author: zhimin
 * @Date: 2022-02-14 14:25:43
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 14:29:43
 * @FilePath: \zhimin_underscore\es6\generator\yieldnext.js
 */
function* f () {
  console.log('f执行');
  for (var i = 0; i < 10; i++) {
    var result = yield i;
    if (result) {
      i = -1;
    }
  }
}
var g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));