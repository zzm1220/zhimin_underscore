/*
 * @Author: zhimin
 * @Date: 2022-02-11 16:00:24
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-11 16:03:36
 * @FilePath: \zhimin_underscore\es6\iterator\1.js
 */
function makeIterator (array) {
  let nextIndex = 0;
  return {
    next () {
      return nextIndex < array.length ?
        { value: array[nextIndex++], done: false } :
        { value: undefined, done: true }
    }
  }
}

var it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());