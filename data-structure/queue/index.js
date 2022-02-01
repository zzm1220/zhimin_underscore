/*
 * @Author: zhimin
 * @Date: 2022-01-29 14:44:58
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-29 16:05:45
 * @FilePath: \zhimin_underscore\data-structure\queue\index.js
 */
(function () {
  function Queue () {
    this.dataStore = [];
  }
  Queue.prototype = {
    constructor: Queue,
    enqueue (element) {
      this.dataStore.push(element);
    },
    dequeue () {
      return this.dataStore.shift();
    },
    front () {
      return this.dataStore[0];
    },
    back () {
      return this.dataStore[this.dataStore.length - 1];
    },
    empty () {
      return this.dataStore.length === 0;
    },
    toString () {
      var str = '';
      for (var i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i];
      }
      return str;
    }
  };

})();