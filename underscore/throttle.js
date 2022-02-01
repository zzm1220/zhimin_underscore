/*
 * @Author: zhimin
 * @Date: 2022-01-25 14:06:18
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-25 15:35:34
 * @FilePath: \zhimin_underscore\underscore\throttle.js
 */
(function () {
  /**
   * 使用时间戳实现节流
   * @param {function} func 
   * @param {time} wait 
   * @returns 
   */
  this.throttle = function (func, wait) {
    var previous = 0;
    return function () {
      var context = this,
        args = arguments;
      var now = Date.now();
      if ((now - previous) > wait) {
        func.apply(context, args);
        previous = now;
      }
    }
  }
  /**
   * 使用定时器实现节流
   * @param {function} func 
   * @param {time} wait 
   * @returns 
   */
  this.throttleTime = function (func, wait) {
    var timeout = null;
    return function () {
      var context = this, args = arguments;
      if (!timeout) {
        timeout = setTimeout(function () {
          clearTimeout(timeout);
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  }
  this.throttleMerge = function (func, wait) {
    var previous = 0, timeout = null, args = null, context = null;
    var later = function () {
      previous = Date.now();
      timeout = null;
      func.apply(context, args);
    }
    var throttled = function () {
      context = this;
      args = arguments;
      var now = Date.now();
      var remaining = wait - (now - previous);

      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
    };
    return throttled;
  }
  this.throttleOpt = function (func, wait, options) {
    var throttled = function () {
      var now = Date.now();

    };
    return throttled;
  }
})();