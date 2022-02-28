/*
 * @Author: zhimin
 * @Date: 2022-02-17 09:56:15
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-17 10:01:17
 * @FilePath: \zhimin_underscore\es6\generator\co.js
 */
function co (gen) {
  var ctx = this;
  return new Promise(function (resolve, reject) {
    if (typeof gen === 'function') gen = gen.call(ctx);

    function onFulfilled (res) {
      var ret = null;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }
    function next () {

    }
  });
}