/*
 * @Author: zhimin
 * @Date: 2022-02-24 10:55:14
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-24 15:11:47
 * @FilePath: \zhimin_underscore\big-fe\stage1\iptv-lib\lib\index.js
 */
module.exports = {
  sum (a, b) {
    return (a + b) * 3;
  },
  init ({ option, param }) {
    console.log('执行init操作');
    console.log(option, param);
  }
}