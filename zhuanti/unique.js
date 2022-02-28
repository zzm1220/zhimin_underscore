/*
 * @Author: zhimin
 * @Date: 2022-02-25 16:46:27
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-25 17:13:33
 * @FilePath: \zhimin_underscore\zhuanti\unique.js
 */
// 双重循环去重
function unique (arr) {
  var res = [];
  for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (arr[i] === res[j]) {
        break;
      }
    }
    if (j === resLen) {
      res.push(arr[i]);
    }
  }
  return res;
}
// 使用indexOf判断
function unique1 (arr) {
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

// 数组是否已经排序
function unique2 (arr, isSorted) {
  var res = [];
  var seen = null;
  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i];
    if (isSorted) {
      if (!i || seen != item) {
        res.push(item);
      }
      seen = item;
    }
    else if (res.indexOf(item) === -1) {
      res.push(item);
    }
  }
  return res;
}

// 数组去重加入iterator
function unique3 (arr, isSorted, iterator) {
  var res = [], seen = [];
  var i = 0, len = arr.length;
  for (; i < len; i++) {
    var item = arr[i];
    var computed = iterator ? iterator(item, i, array) : item;
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(item);
      }
      seen = computed;
    } else if (iterator) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed);
        res.push(item);
      }
    } else if (res.indexOf(item) === -1) {
      res.push(item);
    }
  }
  return res;
}
// es6
var unique4 = arr => [...new Set(arr)];