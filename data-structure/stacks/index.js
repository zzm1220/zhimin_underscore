/*
 * @Author: zhimin
 * @Date: 2022-01-29 13:41:17
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-29 13:53:19
 * @FilePath: \zhimin_underscore\data-structure\stacks\index.js
 */
(function () {
  function Stack () {
    this.dataStore = [];
    this.top = 0;
  }
  Stack.prototype = {
    constructor: Stack,
    push (elem) {
      this.dataStore[this.top++] = elem;
    },
    pop () {
      if (this.top === 0) {
        return null;
      } else {
        this.top--;
        return this.dataStore[this.top];
      }
    },
    peek () {
      if (this.top > 0) {
        return this.dataStore[this.top - 1];
      } else {
        return null;
      }
    },
    clear () {
      this.dataStore.length = this.top = 0;
    },
    length () {
      return this.top;
    }
  };
  window.Stack = Stack;
})();