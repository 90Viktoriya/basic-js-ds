const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.top = null;
  }

  getUnderlyingList() {
    if (this.top === null) {
      return {};
    }
    let items = {value: '', next: ''};
    items.value = this.top.value;
    items.next = this.top.next;
    return items;
  }

  addValue(top, node){
    if (top.next === null){
      top.next = node;
    } else {
      this.addValue(top.next,node);
    }
  }
  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.top === null){
      this.top = newNode;
      console.log(this.top);
    }
    else {
      this.addValue(this.top, newNode);
      console.log(this.top);
    }
  }

  dequeue() {
    let result = this.top.value;
    this.top = this.top.next;
    return result;
  }
}

module.exports = {
  Queue
};
