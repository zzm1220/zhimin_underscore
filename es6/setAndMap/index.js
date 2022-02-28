/*
 * @Author: zhimin
 * @Date: 2022-02-25 10:42:43
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-25 11:01:06
 * @FilePath: \zhimin_underscore\es6\setAndMap\index.js
 */
const s = new Set();
[2, 3, 4, 5, 4, 3, 2, 1, 6].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}
const s1 = new Set([1, 1, 2, 3, 4]);
console.log(s1);
console.log(s1.keys());
for (let item of s1.keys()) {
  console.log(item);
}
let colorSet = new Set(['red', 'green', 'blue']);
for (let color of colorSet.keys()) {
  console.log(color);
}
for (let color of colorSet.values()) {
  console.log(color);
}
for (let entry of colorSet.entries()) {
  console.log(entry);
}
const ws = new WeakSet();
ws.add({ obj: 1 });