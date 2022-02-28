/*
 * @Author: zhimin
 * @Date: 2022-02-10 16:43:06
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-10 16:48:49
 * @FilePath: \zhimin_underscore\es6\reflect\observe.js
 */
const queuedObservers = new Set();

const handler = {
  set (target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(obserber => obserber());
    return result;
  }
}
const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, handler);

const observablePerson = observable({
  name: '张三',
  age: 11
});

const print = () => {
  console.log(`${observablePerson.name},${observablePerson.age}`);
}

observe(print);

observablePerson.name = '李四';