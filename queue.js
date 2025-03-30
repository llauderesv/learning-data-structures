class Queue {
  tail = 0;
  head = 0;

  enqueue(items, x) {
    items[this.tail] = x;
    if (this.tail === items.length) {
      this.tail = 0;
    } else {
      this.tail += 1;
    }
  }

  dequeue(items) {
    if (this.head === this.tail) {
      console.log('Queue Underflow');
      return;
    }

    const x = items[this.head];
    if (this.head === items.length) {
      this.head = 0;
    } else {
      this.head += 1;
    }
    return x;
  }
}

const items = new Array(4);
const queue = new Queue();
queue.enqueue(items, 15);
queue.enqueue(items, 6);
queue.enqueue(items, 2);

console.log(queue.tail);
console.log(queue.head);

console.log(queue.dequeue(items));
console.log(queue.head);
