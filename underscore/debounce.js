/*
 * @Author: zhimin
 * @Date: 2022-01-25 13:19:10
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-25 13:52:51
 * @FilePath: \zhimin_underscore\underscore\debounce.js
 */
(function () {
  /**
   *  防抖函数
   * @returns Function
   */
  this.debounce = function (func, wait, immediate) {
    var timeout = null, result = null;
    var debounced = function () {
      var context = this;
      var args = arguments;
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(function () {
          timeout = null;
        }, wait);
        if (callNow) result = func.apply(context, args);
      } else {
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      }
      return result;
    }
    debounced.cancel = function () {
      clearTimeout(timeout);
      timeout = null;
    }
    return debounced;
  }
})();