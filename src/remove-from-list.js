const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeNode(top, value) {
  if (top.value === value) {
    if (top.next === null) {
      return null;
    } else {
      top = removeNode(top.next, value);
    }
  } else {
    if (top.next === null) {
      return top;
    } else {
      top.next = removeNode(top.next, value);
    }
  }
  return top;
}
function removeKFromList(l, k) {
  return removeNode(l, k);
}

module.exports = {
  removeKFromList
};
