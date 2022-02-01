const { restArgs } = require("underscore");

/*
 * @Author: zhimin
 * @Date: 2022-01-21 17:00:48
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-21 17:27:36
 * @FilePath: \zhimin_underscore\underscore\partial.js
 */
function partial () {
  var fn = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  }
}
function restArgs (func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function () {
    var length = Math.max(argument.length - startIndex, 0);
    var rest = Array(length);
    var index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }

    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex, index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  }
}