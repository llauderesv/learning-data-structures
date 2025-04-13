class LinkedNode {
  data;
  nextNode;
  constructor(data) {
    this.data = data;
  }
}

const node_1 = new LinkedNode('once');
const node_2 = new LinkedNode('upon');
const node_3 = new LinkedNode('a');
const node_4 = new LinkedNode('time');

node_1.nextNode = node_2;
node_2.nextNode = node_3;
node_3.nextNode = node_4;

class LinkedList {
  firstNode;
  lastNode;

  constructor(val) {
    const newNode = new LinkedNode(val);

    this.firstNode = newNode;
    this.lastNode = newNode;
  }

  read(index) {
    let currentIndex = 0;
    let currentNode = this.firstNode;

    if (currentIndex === index) {
      return currentNode;
    }

    while (currentIndex < index && currentNode !== null) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    if (!currentNode) {
      return null;
    } else {
      return currentNode;
    }
  }

  insert(value) {
    const newNode = new LinkedNode(value);
    this.lastNode.nextNode = newNode;
    this.lastNode = newNode;
    return newNode;
  }

  indexOf(value) {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    if (currentNode.data === value) {
      return currentIndex;
    }

    while (currentNode && currentNode.data !== value) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    if (!currentNode) {
      return -1;
    } else {
      return currentIndex;
    }
  }

  insertAtIndex(value, index) {
    let newNode = new LinkedNode(value);

    if (index === 0) {
      let prevNode = this.firstNode;
      this.firstNode = newNode;
      this.firstNode.nextNode = prevNode;

      return this.firstNode;
      // this.firstNode = newNode;
      // newNode.nextNode = prevNode;
      // newNode.nextNode = prevNode;
      // prevNode.nextNode = newNode;
    }

    const currentNode = this.read(index - 1);

    if (currentNode && currentNode.nextNode === undefined) {
      currentNode.nextNode = newNode;
    } else {
      if (currentNode) {
        let prevNode = currentNode;
        newNode.nextNode = prevNode.nextNode;
        prevNode.nextNode = newNode;
      }
    }

    return currentNode;
  }

  displayAll() {
    let currentNode = this.firstNode;
    let output = '';
    while (currentNode !== undefined) {
      output += `${currentNode.data} -> `;
      currentNode = currentNode.nextNode;
    }

    output += 'null';
    console.log(output);

    return output;
  }

  deleteAt(index) {
    if (index === 0) {
      this.firstNode = this.firstNode.nextNode;
      return this.firstNode;
    }

    let currentIndex = 0;
    let currentNode = this.firstNode;
    let previousNode = this.firstNode;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    previousNode.nextNode = currentNode.nextNode;

    return currentNode;
  }

  reverse() {
    let prevNode = new LinkedNode(null);
    let currentNode = this.firstNode;

    while (currentNode !== undefined) {
      let tmp = currentNode.nextNode;
      currentNode.nextNode = prevNode;
      prevNode = currentNode;

      currentNode = tmp;
    }

    this.firstNode = prevNode;
  }

  *[Symbol.iterator]() {
    let currentNode = this.firstNode;
    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.nextNode;
    }
  }
}

const list = new LinkedList('A');
list.insert('B');
list.insert('C');
list.reverse();

for (const node of list) {
  console.log(node);
}

// console.log(list.read(3));
// console.log(list.indexOf('once'));
// console.log(list.indexOf('upon'));
// console.log(list.indexOf('a'));
// console.log(list.indexOf('time'));
// console.log(list.indexOf('in'));

// console.log(list.insertAtIndex('in', 2));
// console.log(list.insertAtIndex('in', 0));
// console.log(list.insertAtIndex('in', 5));
// console.log(list.insertAtIndex('hollywood', 6));
// console.log(list.insertAtIndex('in', 3));
// console.log(list.insertAtIndex('hollywood', 4));
// console.log(list.indexOf('in'));
// list.indexOf('in');
// list.displayAll();
// list.deleteAt(2);
// list.displayAll();

export {};
