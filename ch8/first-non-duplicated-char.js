function firstNonDuplicatedChar(str) {
  const hash = new Map();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hash.has(char)) {
      hash.set(char, hash.get(char) + 1);
    } else {
      hash.set(char, 1);
    }
  }

  let firstChar = '';
  for (let [key, value] of hash) {
    if (value <= 1) {
      firstChar = key;
      break;
    }
  }

  return firstChar;
}

const result = firstNonDuplicatedChar('minimum');
console.log(result);
