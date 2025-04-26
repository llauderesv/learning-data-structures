import { LinkedNode } from './linked-list.js';

class Queue {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    const newNode = new LinkedNode(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return;

    let currentNode = this.head;
    this.head = currentNode.nextNode;
    if (!this.head) {
      this.tail = null;
    }

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

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

for (let val of queue) {
  console.log(val);
}

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
for (let val of queue) {
  console.log(val);
}
