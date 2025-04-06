function hashLetter(char) {
  const START_CODE = 64;
  return char
    .toUpperCase()
    .split('')
    .reduce((hash, letter) => hash * (letter.charCodeAt(0) - START_CODE), 1);
}

console.log(hashLetter('cab'));
