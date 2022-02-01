/*
 * @Author: zhimin
 * @Date: 2022-02-01 10:56:32
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-01 11:32:47
 * @FilePath: \zhimin_underscore\data-structure\link\cryclelink.js
 */
(function () {
  function Node (element) {
    this.element = element;
    this.next = null;
  }
  function CLink () {
    this.head = new Node('head');
    this.head.next = this.head;
    this.currentNode = this.head;
  }
  CLink.prototype = {
    constructor: CLink,
    init (element) {
      var lastNode = this.lastNode();
      this.insert(element, lastNode.element);
    },
    lastNode () {
      var lastNode = this.head;
      while (lastNode.next.element !== 'head') {
        lastNode = lastNode.next;
      }
      return lastNode;
    },
    /**
     * 查找元素节点
     * @param {*} element 
     * @returns Node
     */
    find (element) {
      var currentNode = this.head;
      while (currentNode.element !== element) {
        currentNode = currentNode.next;
      }
      return currentNode;
    },
    /**
     * 查找element节点的前一个节点
     * @param {*} element 
     * @returns Node
     */
    findPrevious (element) {
      var currentNode = this.head;
      while (currentNode.next && currentNode.next.element !== element) {
        currentNode = currentNode.next;
      }
      return currentNode;
    },
    /**
     * 插入节点
     * @param {*} newElement 
     * @param {*} item 
     */
    insert (newElement, item) {
      var newNode = new Node(newElement);
      var currentNode = this.find(item);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    },
    /**
     * 移除节点
     * @param {*} item 
     */
    remove (item) {
      var previousNode = this.findPrevious(item);
      if (previousNode && previousNode.next) {
        previousNode.next = previousNode.next.next;
      }
    },
    /**
     * 向前移动节点
     * @param {*} n 
     */
    advance (n) {
      while (n > 0) {
        if (this.currentNode.next.element === 'head') {
          this.currentNode = this.currentNode.next.next;
        } else {
          this.currentNode = this.currentNode.next;
        }
        n--;
      }
    },
    /**
     * 一共又多少节点
     * @returns Int
     */
    count () {
      var node = this.head;
      var cnt = 0;
      while (node.next.element !== 'head') {
        node = node.next;
        cnt++;
      }
      return cnt;
    },
    /**
     * 展示所有节点
     */
    display () {
      var currentNode = this.head;
      while (currentNode.next !== null && currentNode.next.element !== 'head') {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
      }
    }
  }
  window.CLink = CLink;
})();