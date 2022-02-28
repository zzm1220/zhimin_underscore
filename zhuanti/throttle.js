/*
 * @Author: zhimin
 * @Date: 2022-02-25 15:30:08
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-25 16:17:31
 * @FilePath: \zhimin_underscore\zhuanti\throttle.js
 */
// 使用时间戳来实现节流，第一次会立马执行
function throttle1 (fn, wait) {
  var previous = 0;
  return function () {
    var context = this,
      args = arguments,
      now = +new Date();
    if ((now - previous) > wait) {
      fn.apply(context, args);
      previous = now;
    }
  }
}
// 使用定时器，第一次不会立马执行
function throttle1 (fn, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        fn.apply(context, args);
      }, wait);
    }
  }
}

// 两者结合
function throttle3 (fn, wait) {
  var previous = 0,
    timeout = null,
    context,
    args;
  var later = function () {
    previous = +new Date();
    timeout = null;
    fn.apply(context, args);
  }
  var throttled = function () {
    var now = +new Date(),
      remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining < 0 || remaning > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      fn.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  }
  return throttled;
}

function throttle4 (fn, wait, option) {
  var previous = 0, timeout = null;
  if (!option) {
    option = {};
  }
  var context, args;
  var later = function () {
    previous = option.leading === false ? 0 : +new Date();
    timeout = null;
    func.apply(context, args);
  };
  var throttled = function () {
    context = this, args = arguments;
    var now = +new Date();
    if (!previous && option.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    if (remaining < 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      fn.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };
  throttled.cancel = function () {

  }
  return throttled;
}