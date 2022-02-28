/*
 * @Author: zhimin
 * @Date: 2022-02-14 14:58:04
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 15:07:09
 * @FilePath: \zhimin_underscore\es6\generator\thowErr.js
 */
function* gen () {
  console.log('生成迭代器');
  try {
    yield 1;
  } catch (e) {
    console.log('内部捕获,', e);
  }
}
var i = gen();
var obj = i.next();
// console.log(obj);
// var obj1 = i.next();
// console.log(obj1);
try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
