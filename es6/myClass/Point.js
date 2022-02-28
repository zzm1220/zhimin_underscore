/*
 * @Author: zhimin
 * @Date: 2022-02-17 11:07:02
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-17 15:06:01
 * @FilePath: \zhimin_underscore\es6\myClass\Point.js
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // static cnt = 11;
  static draw () {
    return 'super draw function';
  }
  toString () {
    return '(' + this.x + ',' + this.y + ')';
  }
}
class ShadowPoint extends Point {
  // _count = 0;
  static draw () {
    return super.draw() + ',subClass draw';
  }
}

const p1 = new Point(1, 2);
console.log(Point.draw());
console.log(ShadowPoint.draw());
const sp1 = new ShadowPoint();
console.log(sp1.toString());
