/*
 * @Author: zhimin
 * @Date: 2022-02-09 14:35:07
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-09 14:45:14
 * @FilePath: \zhimin_underscore\es6\point.js
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString () {
    return '(' + this.x + ' ' + this.y + ')';
  }
  get prop () {
    return 'getter';
  }
  set prop (value) {
    console.log('setter: ' + value);
  }
}
const p1 = new Point(2, 3);
console.log(p1.toString());
console.log(p1.hasOwnProperty('x'));
console.log(p1.hasOwnProperty('toString'));
const proto = Object.getPrototypeOf(p1);
proto.printName = function () {
  return 'Oops';
}
console.log(p1.printName());
console.log(p1.prop);
p1.prop = 22222;
const descriptor = Object.getOwnPropertyDescriptor(Point.prototype, 'prop');
console.log(descriptor);