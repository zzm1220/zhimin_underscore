/*
 * @Author: zhimin
 * @Date: 2022-02-14 15:11:41
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 15:14:22
 * @FilePath: \zhimin_underscore\es6\generator\throwErr1.js
 */
var gen = function* gen () {
  try {
    yield console.log('a');
  } catch (e) {
    console.log('内部错误', e);
  }
  yield console.log('b');
  yield console.log('c');
}
var g = gen();
g.next();
g.throw();
g.next();