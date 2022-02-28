/*
 * @Author: zhimin
 * @Date: 2022-02-10 10:43:52
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-10 10:49:04
 * @FilePath: \zhimin_underscore\es6\proxy\construct\index.js
 */
const handler = {
  construct (target, args, newTarget) {
    console.log('called: ' + args.join(', '));
    return {
      value: args[0] * 10
    };
  }
};
const p = new Proxy(function () { }, handler);
console.log(new p(1, 2, 3))