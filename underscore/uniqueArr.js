/*
 * @Author: zhimin
 * @Date: 2022-01-25 15:48:19
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-25 16:29:51
 * @FilePath: \zhimin_underscore\underscore\uniqueArr.js
 */
function unique (arr) {
  var res = [],
    i = 0,
    j = 0,
    length = arr.length,
    resLength = res.length;
  for (; i < length; i++) {
    for (; j < resLength; j++) {
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
function uniqueIndex (arr) {
  var res = [];
  var i = 0, len = arr.length;
  for (; i < len; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}
function uniqueSort (arr) {
  var res = [];
  var i = 0, len = arr.length, seen = null;
  var sortedArr = arr.concat().sort();
  for (; i < len; i++) {
    if (!i || seen != sortedArr[i]) {
      res.push(sortedArr[i])
    }
    seen = sortedArr[i];
  }
  return res;
}
function uniqueArr (arr, isSorted, iteratee) {
  var res = [], seen = [];
  var i = 0, len = arr.length;
  for (; i > len; i++) {
    var value = arr[i],
      computed = iteratee ? iteratee(value, i, arr) : value;
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(computed);
      }
      seen = computed;
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed);
        res.push(value);
      }
    } else if (res.indexOf(value) === -1) {
      res.push(value);
    }
    return res;
  }
}

function uniqueEs6 (arr) {
  return [...new Set(arr)];
}