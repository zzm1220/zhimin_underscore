/*
 * @Author: zhimin
 * @Date: 2022-01-29 11:04:12
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-29 13:34:42
 * @FilePath: \zhimin_underscore\data-structure\list\index.js
 */
(function () {
  function List () {
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
  }
  List.prototype = {
    constructour: List,
    append (element) {
      this.dataStore[this.listSize++] = element;
    },
    remove (element) {
      var index = this.find(element);
      if (index > -1) {
        this.dataStore.splice(index, 1);
        this.listSize--;
        return true;
      }
      return false;
    },
    length () {
      return this.dataStore.length;
    },
    toString () {
      return this.dataStore;
    },
    insert (element, after) {
      var insertPost = this.dataStore.indexOf(after);
      if (insertPost > -1) {
        this.dataStore.splice(insertPost, 0, element);
        this.listSize++;
        return true;
      }
      return false;
    },
    find (element) {
      return this.dataStore.indexOf(element);
    },
    clear () {
      this.dataStore.length = this.listSize = this.pos = 0;
    },
    contains (element) {
      console.log(element);
      for (var i = 0; i < this.dataStore.length; i++) {
        if (element === this.dataStore[i]) {
          return true;
        }
      }
      return false;
    },
    front () {
      this.pos = 0;
    },
    end () {
      this.pos = this.listSize - 1;
    },
    prev () {
      this.pos--;
    },
    next () {
      if (this.pos < this.listSize) {
        this.pos++;
      }
    },
    currPos () {
      return this.pos;
    },
    moveTo (position) {
      this.pos = position;
    },
    getElement (position) {
      return this.dataStore[position];
    },
    hasNext () {
      return this.pos < this.listSize;
    },
    hasPrev () {
      return this.pos > 0;
    }
  }
  window.List = List;
})();