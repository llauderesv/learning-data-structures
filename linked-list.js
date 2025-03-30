class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(key) {
    this.head = new LinkedNode(key);
    this.next = null;
  }

  add(value) {
    const newNode = new LinkedNode(value);

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
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

    let temp = this.head;
    while (temp.next && temp.next.value !== value) {
      temp = temp.next;
    }

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
linkedList.printList();
console.log(linkedList.search(1));
linkedList.delete(2);
linkedList.printList();

export {};
