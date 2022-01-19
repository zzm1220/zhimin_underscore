/*
 * @Author: zhimin
 * @Date: 2022-01-18 10:38:52
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-18 17:45:00
 * @FilePath: \zhimin_underscore\type.js
 */
var class2type = {};
// 相当于Object.prototype.toString
var toString = class2type.toString;
var hasOwnProperty = class2type.hasOwnProperty;

"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
  class2type["[object" + item + "]"] = item.toLocaleLowerCase();
});
/**
 * 
 * @param {*} obj
 * 判断javascript中的类型 
 */
function type (obj) {
  if (obj == null) {
    return obj + '';
  }
  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj;
}
/**
 * 判断是否是一个函数
 * @param {*} obj 
 * @returns 
 */
function isFunction (obj) {
  return type(obj) === 'function';
}
/**
 * 判断是否是数组
 */
var isArray = Array.isArray || function (obj) {
  return type(obj) === 'array';
}
/**
 * 判断是否是纯粹的对象
 * {} 和 new Object 和 没有原型的对象
 * @param {*} obj 
 */
function isPlainObject (obj) {
  var proto, Ctor;
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false;
  }
  // 获取obj的原型
  proto = Object.getPrototypeOf(obj);
  // 没有原型的对象是纯粹的，Object.create(null)
  if (!proto) {
    return true;
  }
  Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && hasOwnProperty.toString.call(Ctor) === hasOwnProperty.toString.call(obj);
}
/**
 * 判断一个对象是否为空对象
 * @param {*} obj 
 * @returns Boolean
 */
function isEmptyObject (obj) {
  var name;
  for (name in obj) {
    return false;
  }
  return true;
}
/**
 * 判断是否为window对象
 * @param {*} obj 
 * @returns 
 */
function isWindow (obj) {
  return obj != null && obj === obj.window;
}
function isElement (obj) {
  return !!(obj && obj.nodeType === 1);
}
/**
 * 判断数组或类数组
 * @param {*} obj 
 * @returns 
 */
function isArrayLike (obj) {
  var length = !!obj && 'length' in obj && obj.length;
  var typeRes = type(obj);
  if (typeRes === 'function' || isWindow(obj)) {
    return false;
  }
  return typeRes === 'array' || length === 0 ||
    typeof length === 'number' && length > 0 && (length - 1) in obj;
}

function extend () {
  var deep = false;
  var args = arguments,
    length = args.length;
  var i = 1;
  var options, name, copy, src, clone, cloneIsArray;
  var target = arguments[0] || {};
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {};
  }
  for (; i < length; i++) {
    options = args[i];
    if (options != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (deep && clone && (isPlainObject(copy) || (cloneIsArray = Array.isArray(copy)))) {
          if (cloneIsArray) {
            cloneIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }
          target[name] = extend(deep, clone, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}