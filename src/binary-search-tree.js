const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode;
  }

  addNode(root, newNode) {
    if (root.data > newNode.data) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.addNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.addNode(root.right, newNode);
      }
    }
  }
  add(data) {
    let newNode = new Node;
    newNode.data = data;
    if (this.rootNode === null)
      this.rootNode = newNode;
    else
      this.addNode(this.rootNode, newNode);
  }

  search (root, data) {
    if (root === null) {
      return null;
    }
    if (root.data === data) {
      return root;
    } else {
      if (root.data < data) {
        return this.search(root.right, data);
      } else {
        return this.search(root.left, data);
      }
    }
  }
  has(data) {
    if (this.search(this.rootNode, data))
      return true;
    else return false;
  }

  find(data) {
    return this.search(this.rootNode, data);
  }
  
  removeNode(root, data) { 
    if (!root)
      return null;
    if (root.data === data) {
      if (!root.left && !root.right)
        return null;
      else
        if (!root.left) {
          return root.right;
        }
        if (!root.right) {
          return root.left;
        }
      root.data = this.minNode(root.right);
      root.right = this.removeNode(root.right, root.data);
    } else
    if (root.data < data)
      root.right = this.removeNode(root.right, data);
    else 
      root.left = this.removeNode(root.left, data);
    return root;
  }
  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  minNode(root) {
    if (root.left === null)
      return root.data;
    else
      return this.minNode(root.left);
  }
  min() {
    if (!this.rootNode)
      return null;
    return this.minNode(this.rootNode);
  }

  maxNode(root) {
    if (root.right === null)
    return root.data;
  else
    return this.maxNode(root.right);
  }
  max() {
    if (!this.rootNode)
      return null;
    return this.maxNode(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree
};