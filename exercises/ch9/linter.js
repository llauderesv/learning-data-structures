function linter(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' && stack.pop() !== '(') {
      console.log('Invalid Parenthesis');
    } else if (char === '}' && stack.pop() !== '{') {
      console.log('Invalid Curly braces');
    } else if (char === ']' && stack.pop() !== '[') {
      console.log('Invalid Bracket');
    }
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === '(') {
      console.log('Missing Closing Parenthesis');
    } else if (stack[i] === '{') {
      console.log('Missing Closing Curly Bracket');
    } else if (stack[i] === '[') {
      console.log('Missing Closing Bracket');
    }
  }
}

const result = linter('}(var x = {y: [1, 2, 3]})');
export {};
