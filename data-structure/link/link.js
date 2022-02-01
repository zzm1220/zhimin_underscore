/*
 * @Author: zhimin
 * @Date: 2022-02-01 09:57:13
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-01 10:11:52
 * @FilePath: \zhimin_underscore\data-structure\link\link.js
 */
(function () {
  function Node (element) {
    this.element = element;
    this.next = null;
  }
  function LinkList () {
    this.head = new Node('head');
  };
  LinkList.prototype = {
    constructor: LinkList,
    insert (newElement, item) {
      var newNode = new Node(newElement);
      var current = this.find(item);
      while (current) {
        newNode.next = current.next;
        current.next = newNode;
      }
    },
    find (item) {
      var currentNode = this.head;
      while (currentNode && currentNode.element !== item) {
        currentNode = currentNode.next;
      }
      return currentNode;
    },
    findPrevious (item) {
      var currentNode = this.head;
      while (currentNode.next && currentNode.next.element !== item) {
        currentNode = currentNode.next;
      }
      return currentNode;
    },
    remove (item) {
      var removePreNode = this.findPrevious(item);
      while (removePreNode && removePreNode.next) {
        removePreNode.next = removePreNode.next.next;
      }
    }
  };
  window.LinkList = LinkList;
})();