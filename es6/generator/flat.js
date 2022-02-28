/*
 * @Author: zhimin
 * @Date: 2022-02-14 10:26:28
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 10:29:06
 * @FilePath: \zhimin_underscore\es6\generator\flat.js
 */
var arr = [1, [2, 3], 4, [5, 6]];
var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
}
for (var f of flat(arr)) {
  console.log(f);
}