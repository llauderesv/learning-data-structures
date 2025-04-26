function reverseString(str) {
  let stack = str.split('');

  let reverseStr = '';
  while (stack.length > 0) {
    reverseStr += stack.pop();
  }

  return reverseStr;
}

console.log(reverseString('abcde'));
