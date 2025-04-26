function firstStringIndex(str, counter = 0) {
  if (str.length === 0) return null;
  if (str[counter] === 'x') return counter;

  return firstStringIndex(str, counter + 1);
}

const ans = firstStringIndex('abcdefghijklmnopqrstuvwxyz');
console.log(ans);

export {}
