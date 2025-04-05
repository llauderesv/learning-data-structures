function bubbleSort(arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    let d = i;
    let c = i + 1;
    while (d >= 0) {
      if (arr[d] > arr[c]) {
        let tmp = arr[d];
        arr[d] = arr[c];
        arr[c] = tmp;
        c--;
      } else {
        break; // if no swap array is already sorted.
      }
      d--;
    }
  }

  return arr;
}

console.log(bubbleSort([4, 2, 7, 1, 3]));
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
