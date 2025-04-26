import { LinkedNode } from './linked-list.js';

class Stack {
  head;
  tail;
  top = -1;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new LinkedNode(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.top += 1;
  }

  pop() {
    if (this.head === this.tail) {
      let head = this.head;
      this.head = undefined;
      this.tail = undefined;
      this.top = 0;
      return head;
    }

    let currentNode = this.head.nextNode;
    let prev = this.head;
    while (currentNode.nextNode) {
      prev = currentNode;
      currentNode = currentNode.nextNode;
    }

    this.top -= 1;
    prev.nextNode = undefined;
    this.tail = prev;
    return currentNode;
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.nextNode;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
for (let val of stack) {
  console.log(val);
}
