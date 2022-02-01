/*
 * @Author: zhimin
 * @Date: 2022-01-25 10:12:21
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-25 10:36:34
 * @FilePath: \zhimin_underscore\underscore\tmp.js
 */
function tmp (str, data) {
  var str = document.getElementById(str).innerHTML;

  var string = "var p = [];p.push('" +
    str.replace(/[\r\t\n]/g, "")
      .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
      .replace(/<%/g, "');")
      .replace(/%>/g, "p.push('")
    + "')";

  eval(string);
  return p.join('');
}