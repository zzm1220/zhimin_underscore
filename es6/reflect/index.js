/*
 * @Author: zhimin
 * @Date: 2022-02-10 16:24:31
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-10 16:30:26
 * @FilePath: \zhimin_underscore\es6\reflect\index.js
 */
const myObj = {
  foo: 1,
  age: 22,
  get baz () {
    return this.foo + this.age;
  },
  set baz (value) {
    this.foo = value;
    return this.foo;
  }
};
const res = Reflect.get(myObj, 'baz');
console.log(res);
console.log(Reflect.has(myObj, 'baz'));