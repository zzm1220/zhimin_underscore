/*
 * @Author: zhimin
 * @Date: 2022-02-25 13:54:43
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-25 13:57:01
 * @FilePath: \zhimin_underscore\es6\setAndMap\map2obj.js
 */
function strMapToObj (strMap) {
  let obj = {};
  for (let [key, value] of strMap) {
    obj[key] = value;
  }
  return obj;
}
function objToMap (obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}