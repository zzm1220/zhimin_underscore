/*
 * @Author: zhimin
 * @Date: 2022-02-08 14:45:21
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-08 14:56:40
 * @FilePath: \zhimin_underscore\es6\curry.js
 */
var slice = Array.prototype.slice,
  push = Array.prototype.push;
(function () {
  var curry = function (fn) {
    var _args = [];
    return function () {
      var args = slice.call(arguments);
      if (args.length === 0) {
        return fn.apply(fn, _args);
      }
      push.apply(_args, args);
      return arguments.callee;
    }
  }
  this.curry = curry;
})();
