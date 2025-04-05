class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(key) {
    const initialNode = new LinkedNode(key);
    this.head = initialNode;
    this.tail = initialNode;
    this.next = null;
  }

  add(value) {
    const newNode = new LinkedNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  search(value) {
    let tmp = this.head;
    while (tmp !== null && tmp.value !== value) {
      tmp = tmp.next;
    }

    return tmp;
  }

  printList() {
    let temp = this.head;
    let result = '';
    while (temp) {
      result += temp.value + ' -> ';
      temp = temp.next;
    }
    console.log(result + 'null');
  }

  delete(value) {
    if (!this.head) return;

    // If head node holds the value
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let temp = this.search(value);
    if (!temp.next) {
      console.log('Value not found');
      return;
    }

    temp.next = temp.next.next; // Remove the element
  }
}

const linkedList = new LinkedList(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.printList();
console.log(linkedList.search(1));
linkedList.delete(2);
linkedList.printList();

export {};
