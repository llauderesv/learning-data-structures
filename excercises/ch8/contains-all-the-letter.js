function isContainsAllTheLetters(str = '') {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let alphaHash = {};
  for (let i = 0; i < alphabet.length; i++) {
    alphaHash[alphabet[i]] = true;
  }

  for (let j = 0; j < str.length; j++) {
    const char = str[j].toLowerCase();
    if (alphaHash[char]) {
      alphaHash[char] = false;
    }
  }

  // Find the missing letter
  for (let i = 0; i < alphabet.length; i++) {
    if (alphaHash[alphabet[i]]) {
      return alphabet[i]; // Return the missing letter
    }
  }

  return null; // Return null if no letter is missing
}

const ans = isContainsAllTheLetters('the quick brown box jumps over a lazy dog');
console.log(ans);

export {};
