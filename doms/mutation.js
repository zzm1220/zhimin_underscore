/*
 * @Author: zhimin
 * @Date: 2022-01-21 10:38:35
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-21 15:31:18
 * @FilePath: \zhimin_underscore\doms\mutation.js
 */
(function (win) {
  'use strict';
  var listeners = [];
  var doc = win.document;
  var MutationObserver = win.MutationObserver || win.WebkitMutationObserver;
  var observer;
  var n = 1;
  // dom ready 钩子函数
  function ready (selector, fn) {
    listeners.push({
      selector,
      fn
    });
    if (!observer) {
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      });
    }
    // check();
    console.log(n)
  }
  function check () {
    // console.log('come')
    // console.log(arguments);
    n++;
    var i = 0, j = 0, length = listeners.length;
    var listener = null, elements = null, element;
    for (; i < length; i++) {
      listener = listeners[i];
      elements = doc.querySelectorAll(listener.selector);
      for (; j < elements.length; j++) {
        element = elements[j];
        if (!element.ready) {
          element.ready = true;
          listener.fn.call(element, element);
        }
      }
    }
  }
  win.ready = ready;
})(this);