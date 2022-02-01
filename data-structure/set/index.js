/*
 * @Author: zhimin
 * @Date: 2022-02-01 15:43:20
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-01 17:01:49
 * @FilePath: \zhimin_underscore\data-structure\set\index.js
 */
(function () {
  function Set () {
    this.datastore = [];
  }
  Set.prototype = {
    constructor: Set,
    /**
     * 向集合中添加数据
     * @param {*} data 
     * @returns Boolean
     */
    add (data) {
      if (this.datastore.indexOf(data) < 0) {
        this.datastore.push(data);
        return true;
      }
      return false;
    },
    /**
     * 删除集合中的元素
     * @param {*} data 
     * @returns Boolean
     */
    remove (data) {
      var pos = this.datastore.indexOf(data);
      if (pos > -1) {
        this.datastore.splice(pos, 1);
        return true;
      }
      return false;
    },
    show () {
      return this.datastore.toString();
    },
    contains (data) {
      if (this.datastore.indexOf(data) > -1) {
        return true;
      }
      return false;
    },
    size () {
      return this.datastore.length;
    },
    /**
     * 并集操作
     * @param {*} set 
     * @returns Set 
     */
    union (set) {
      var tmpSet = new Set();
      for (var i = 0; i < this.datastore.length; i++) {
        tmpSet.add(this.datastore[i]);
      }
      for (var j = 0; j < set.datastore.length; j++) {
        if (!tmpSet.contains(set.datastore[j])) {
          tmpSet.datastore.push(set.datastore[j]);
        }
      }
      return tmpSet;
    },
    /**
     * 求两个集合的交集
     * @param {*} set 
     * @returns Set
     */
    intersect (set) {
      var tmpSet = new Set();
      for (var i = 0; i < this.datastore.length; i++) {
        if (set.contains(this.datastore[i])) {
          tmpSet.add(this.datastore[i]);
        }
      }
      return tmpSet;
    },
    /**
     * 判断一个集合是否是另外一个集合的子集
     * @param {*} set 
     * @returns Boolean
     */
    subset (set) {
      if (this.size() > set.size()) {
        return false;
      }
      for (var i = 0; i < this.datastore.length; i++) {
        if (!set.contains(this.datastore[i])) {
          return false;
        }
      }
      return true;
    },
    difference (set) {
      var tmpSet = new Set();
      for (var i = 0; i < this.datastore.length; i++) {
        if (!set.contains(this.datastore[i])) {
          tmpSet.add(this.datastore[i]);
        }
      }
      return tmpSet;
    }
  }
  window.Set = Set;
})();