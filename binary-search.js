function guesser(arr, searchValue) {
  let lower = 0;
  let higher = arr.length - 1;
  let mid;

  while (lower <= higher) {
    mid = Math.floor((higher + lower) / 2);
    let guess = arr[mid];
    if (guess === searchValue) {
      return mid;
    } else if (guess < searchValue) {
      lower = mid + 1;
    } else if (guess > searchValue) {
      higher = mid - 1;
    }
  }
}

console.log(guesser([1, 2, 3, 4, 5], 2));
