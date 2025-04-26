class LinkedNode {
  data;
  prev;
  next;
  constructor(data) {
    this.data = data;
  }
}

class DoublyLinkedList {
  head;
  constructor() {
    this.head = null;
  }

  insertAtFront(data) {
    let newNode = new LinkedNode(data);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }
}

const node_1 = new LinkedNode('once');
const node_2 = new LinkedNode('upon');
const node_3 = new LinkedNode('a');

const list = new DoublyLinkedList();
list.insertAtFront(node_1);
list.insertAtFront(node_2);
list.insertAtFront(node_3);

console.log(list);

export {};
