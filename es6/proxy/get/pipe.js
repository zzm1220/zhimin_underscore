/*
 * @Author: zhimin
 * @Date: 2022-02-09 17:24:40
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-09 17:38:06
 * @FilePath: \zhimin_underscore\es6\proxy\pipe.js
 */
function pipe (value) {
  var funcStack = [];
  var oproxy = new Proxy({}, {
    get (target, fnName) {
      if (fnName === 'get') {
        return funcStack.reduce(function (val, fn) {
          return fn(val);
        }, value);
      }
      funcStack.push(global[fnName]);
      return oproxy;
    }
  });
  return oproxy;
}
global.double = n => n * 2;
global.pow = n => n * n;
global.reverseInt = n => n.toString().split('').reverse().join('');

var final = pipe(3).double.pow.reverseInt.get;
console.log(final);