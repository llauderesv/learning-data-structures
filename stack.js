export class Stack {
  top = -1;

  get isEmpty() {
    return this.top < 0 ? true : false;
  }

  push(items, x) {
    if (this.top === items.length) {
      console.log('Stack Overflow');
      return;
    } else {
      this.top += 1; // Increase the top of the stack
      items[this.top] = x;
    }
  }

  pop(items) {
    if (this.isEmpty) {
      console.log('Stack Underflow');
      return;
    } else {
      this.top -= 1; // Decrease the top of the stack
      return items[this.top + 1];
    }
  }
}

const items = new Array(4);
const stack = new Stack();
stack.push(items, 15);
stack.push(items, 6);
stack.push(items, 2);
stack.push(items, 9);

console.log(stack.top);
console.log(items);

console.log(stack.pop(items));

console.log(items);
console.log(stack.pop(items));
console.log(stack.pop(items));
console.log(stack.pop(items));
console.log(stack.top);

console.log(stack.isEmpty);

console.log(stack.pop(items));
