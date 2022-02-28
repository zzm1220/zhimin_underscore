/*
 * @Author: zhimin
 * @Date: 2022-02-16 16:26:22
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-16 16:47:28
 * @FilePath: \zhimin_underscore\es6\generator\thunk.js
 */
function thunkify (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var ctx = this;
    return function (done) {
      var called;
      args.push(function () {
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });
      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
}

function run (fn) {
  var gen = fn();
  function next (err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }
  next();
}

function r (gen) {
  var g = gen();
  function next (data) {
    var result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function (data) {
      next(data);
    })
  }
  next();
}