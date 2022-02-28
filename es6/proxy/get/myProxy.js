/*
 * @Author: zhimin
 * @Date: 2022-02-09 15:41:58
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-09 17:04:43
 * @FilePath: \zhimin_underscore\es6\proxy\myProxy.js
 */
class Person {
  constructor(name) {
    this.name = name;
    this._age = 11;
  }
  get age () {
    return this._age;
  }
  set age (value) {
    this._age = value;
  }
}
var person = new Person('张三');
var proto = Object.getPrototypeOf(person);
var descriptor = Object.getOwnPropertyDescriptor(proto, 'age');
console.log(descriptor);
console.log('toString' in person);
console.log(person.hasOwnProperty('age'));
var proxy = new Proxy(person, {
  get (target, propKey, receiver) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError(propKey + '，该属性不存在');
    }
  }
});

console.log(proxy.name);
console.log(proxy.age)