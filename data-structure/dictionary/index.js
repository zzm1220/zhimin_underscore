/*
 * @Author: zhimin
 * @Date: 2022-02-01 14:37:24
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-01 14:49:20
 * @FilePath: \zhimin_underscore\data-structure\dictionary\index.js
 */
(function () {
  function Dictionary () {
    this.datastore = new Array();
  }
  Dictionary.prototype = {
    constructor: Dictionary,
    /**
     * 字典添加数据
     * @param {*} key 
     * @param {*} value 
     */
    add (key, value) {
      this.datastore[key] = value;
    },
    /**
     * 字典查找数据
     * @param {*} key 
     * @returns 
     */
    find (key) {
      return this.datastore[key];
    },
    /**
     * 字典删除数据
     * @param {*} key 
     */
    remove (key) {
      delete this.datastore[key];
    },
    showAll () {
      var keys = Object.keys(this.datastore).sort();
      for (var key in keys) {
        console.log(keys[key] + '->' + this.datastore[keys[key]])
      }
    },
    /**
     * 返回共有多少数据
     * @returns number
     */
    count () {
      var keys = Object.keys(this.datastore);
      return keys.length;
    },
    /**
     * 清空数据
     */
    clear () {
      var keys = Object.keys(this.datastore);
      for (var i in keys) {
        delete this.datastore[keys[i]];
      }
    }
  };
})();