/*
 * @Author: zhimin
 * @Date: 2022-02-07 10:05:00
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-07 15:54:47
 * @FilePath: \zhimin_underscore\data-structure\tree\index.js
 */
(function () {
  function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  Node.prototype = {
    constructor: Node,
    show () {
      return this.data;
    }
  }
  function BST () {
    this.root = null;
  }
  BST.prototype = {
    constructor: BST,
    insert (data) {
      var newNode = new Node(data, null, null);
      var currentNode = null, parent = null;
      if (this.root == null) {
        this.root = newNode;
        return;
      }
      currentNode = this.root;
      while (true) {
        parent = currentNode;
        if (data < currentNode.data) {
          currentNode = currentNode.left;
          if (currentNode == null) {
            parent.left = newNode;
            break;
          }
        } else {
          currentNode = currentNode.right;
          if (currentNode == null) {
            parent.right = newNode;
            break;
          }
        }
      }
    },
    /**
     * 中序遍历
     * @param {Node} node 
     */
    inOrder (node) {
      if (node) {
        this.inOrder(node.left);
        console.log(node.show());
        this.inOrder(node.right);
      }
    },
    /**
     * 先序遍历
     * @param {Node} node 
     */
    preOrder (node) {
      if (node) {
        console.log(node.show());
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    },
    /**
     * 后序遍历
     * @param {Node} node 
     */
    postOrder (node) {
      if (node) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.show());
      }
    },
    /**
     * 查找最小值
     * @returns NUMBER
     */
    getMin (node) {
      var current = node ? node : this.root;
      while (current.left) {
        current = current.left;
      }
      return current.data;
    },
    getMax (node) {
      var current = node ? node : this.root;
      while (current.right) {
        current = current.right;
      }
      return current.data;
    },
    find (data) {
      var current = this.root;
      while (current) {
        if (current.data == data) {
          return current;
        } else if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    },
    remove (data) {
      this.root = this.removeNode(this.root, data);
    },
    removeNode (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        var tmpData = this.getMin(node.right);
        console.log(tmpData);
        node.data = tmpData;
        node.right = this.removeNode(node.right, tmpData);
        return node;
      } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
      } else {
        node.right = this.removeNode(node.right, data);
        return node;
      }
    }
  }
  window.BST = BST;
})();