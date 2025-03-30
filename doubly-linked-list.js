class ListNode {
  constructor(data) {
    this.key = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(key) {
    this.key = new ListNode(key);
  }

  prepend(list, k) {
    const newNode = new ListNode(k);
    newNode.next = list;
    list.prev = newNode;
    return newNode;
  }

  search(list, k) {
    let x = list.head;
    while (x !== null && x.key !== k) {
      x = x.next;
    }
    return x;
  }

  insert(list, k) {
    const newNode = new ListNode(k);
    list.next = newNode;
    newNode.prev = list;
    return newNode;
  }

  printForward(list) {
    let temp = list.next;
    let result = '';
    while (temp) {
      result += temp.key + ' -> ';
      temp = temp.next;
    }
    console.log(result + 'null');
  }
}

const list = new ListNode(1);
const linkedList = new LinkedList();
// const node = linkedList.prepend(list, 2);
const node1 = linkedList.insert(list, 3);
const node2 = linkedList.insert(list, 4);
// console.log(node);
// console.log(node.next.key);
linkedList.printForward(node2);
