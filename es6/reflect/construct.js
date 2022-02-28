/*
 * @Author: zhimin
 * @Date: 2022-02-10 16:31:43
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-10 16:31:49
 * @FilePath: \zhimin_underscore\es6\reflect\construct.js
 */
function Greeting (name) {
  this.name = name;
}
const instance = Reflect.construct(Greeting, ['zhangsan']);
