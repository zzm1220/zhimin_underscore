/*
 * @Author: zhimin
 * @Date: 2022-02-25 15:03:13
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-25 15:26:39
 * @FilePath: \zhimin_underscore\zhuanti\debounce.js
 */
// 防抖函数第一版
function debounce (fn, wait) {
  var timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}
// 防抖函数第二版，绑定this指向以及参数传递
function debounce1 (fn, wait) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  }
}
// 防抖函数第三版，
function debounce2 (fn, wait, immediate) {
  var timeout = null;
  var debounced = function () {
    var context = this,
      args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) fn.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    }
  }
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  }
  return debounced;
}


function debounce3 (fn, wait, immediate) {
  var timeout = null;
  var debounced = function () {
    var context = this,
      args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    }
  };
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  }
  return debounced;
}