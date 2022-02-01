/*
 * @Author: zhimin
 * @Date: 2022-01-17 17:44:12
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-21 17:35:15
 * @FilePath: \zhimin_underscore\underscore\underscore.js
 */
(function () {
  var root = (typeof self == 'object' && self.self == self && self) ||
    (typeof global == 'global' && global.global == global && global) ||
    (this) || {};
  var previousUnderscore = root._;

  var ArrayProto = Array.prototype;
  var push = ArrayProto.push;
  // function _ 构造函数
  var _ = function (obj) {
    if (obj instanceof _) {
      return obj;
    }
    if (!(this instanceof _)) {
      return new _(obj);
    }
    this._wrapped = obj;
  };
  // 导出
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
  _.VERSION = '0.1';
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var isArrayLike = function (collection) {
    var length = collection.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };
  /**
   * 防止冲突
   */
  _.noConflict = function () {
    root._ = previousUnderscore;
    return this;
  }
  /**
   * 实现链式调用
   * @param {*} obj 
   * @returns 
   */
  _.chain = function (obj) {
    var instance = new _(obj);
    instance._chain = true;
    return instance;
  }
  var chainResult = function (instance, obj) {
    return instance._chain ? _.chain(obj) : obj;
  }

  _.each = function (obj, callback) {
    var length, i = 0;
    if (isArrayLike(obj)) {
      length = obj.length;
      for (; i < length; i++) {
        if (callback.call(obj[i], obj[i], i) === false) {
          break;
        }
      }
    } else {
      for (i in obj) {
        if (callback.call(obj[i], obj[i], i) === false) {
          break;
        }
      }
    }
    return obj;
  };
  _.functions = function (obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) {
        names.push(key);
      }
    }
    return names.sort();
  };
  /**
   * 判断是否是函数
   * @param {*} obj 
   * @returns 
   */
  _.isFunction = function (obj) {
    return typeof obj == 'function' || false;
  };
  // 定义相关方法
  /**
   * 字符串反转方法
   * @param {String} string 
   * @returns 
   */
  _.reverse = function (string) {
    return string.split('').reverse().join('');
  };
  /**
   * 将参数对象上的function挂载到_的prototype上
   * @param {Object} obj 
   * @returns 
   */
  _.mixins = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function () {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      }
    });
    return _;
  };

  // 调用mixins方法将_上的方法挂载到_的prototype上
  _.mixins(_);
  /**
   * 获取_实例的_wrapped属性
   * @returns _wapped
   */
  _.prototype.value = function () {
    return this._wrapped;
  }
})();