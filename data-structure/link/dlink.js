/*
 * @Author: zhimin
 * @Date: 2022-02-01 10:14:02
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-01 10:27:50
 * @FilePath: \zhimin_underscore\data-structure\link\dlink.js
 */
(function () {
  function Node (element) {
    this.element = element;
    this.previous = null;
    this.next = null;
  }
  function DLink () {
    this.head = new Node('head');
  }
  DLink.prototype = {
    constructor: DLink,
    insert (element, value) {
      var newNode = new Node(element);
      var insertedNode = this.find(value);
      while (insertedNode) {
        newNode.next = insertedNode.next;
        insertedNode.next.previous = newNode;
        insertedNode.next = newNode;
        newNode.previous = insertedNode;
      }
    },
    find (element) {
      var currentNode = this.head;
      while (currentNode && currentNode.element !== element) {
        currentNode = currentNode.next;
      }
      return currentNode;
    },
    remove (element) {
      var currentNode = this.find(element);
      while (currentNode && currentNode.next) {
        currentNode.previous.next = currentNode.next;
        currentNode.next.previous = currentNode.previous;
        currentNode.next = null;
        currentNode.previous = null;
      }
    }
  }
})();