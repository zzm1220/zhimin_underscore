/*
 * @Author: zhimin
 * @Date: 2022-01-29 16:12:38
 * @LastEditors: zhimin
 * @LastEditTime: 2022-01-29 17:24:26
 * @FilePath: \zhimin_underscore\data-structure\link\index.js
 */
(function () {
  function Node (element) {
    this.element = element;
    this.next = null;
  }
  function DNode (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
  // 单向链表
  function LinkList () {
    this.head = new Node("head");
  }
  LinkList.prototype = {
    constructor: LinkList,
    insert (newElement, item) {
      var currentNode = this.find(item);
      var newNode = new Node(newElement);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    },
    find (item) {
      var currentNode = this.head;
      while (currentNode.element !== item) {
        currentNode = currentNode.next;
      }
      return currentNode;
    },
    findPrevious (item) {
      var currentNode = this.head;
      while (currentNode.next && (currentNode.next.element !== item)) {
        currentNode = currentNode.next;
      }
      return currentNode;
    },
    remove (item) {
      var previousElement = this.findPrevious(item);
      if (previousElement.next) {
        previousElement.next = previousElement.next.next;
      }
    },
    display () {
      var currentNode = this.head;
      while (currentNode.next) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
      }
    }
  }
  function DoubleLinkList () {
    this.head = new Node("head");
  }
  DoubleLinkList.prototype = {
    constructor: DoubleLinkList,
    insert (newElem, item) {
      var currentElem = this.find(item);
      var newNode = new DNode(newElem);
      newNode.next = currentElem.next;
      newNode.prev = currentElem;
      currentElem.next.prev = newNode;
      currentElem.next = newNode;
    },
    find (item) {
      var currentElem = this.head;
      while (currentElem.element !== item) {
        currentElem = currentElem.next;
      }
      return currentElem;
    },
    remove (item) {
      var currentNode = this.find(item);
      if (currentNode.next) {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode.next = null;
        currentNode.prev = null;
      }
    }
  }
  window.LinkList = LinkList;
})();