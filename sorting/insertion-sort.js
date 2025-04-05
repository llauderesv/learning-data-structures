function insertionSort(arr) {
  for (let c = 1; c < arr.length; c++) {
    let j = c - 1;
    let tmpCurr = c;
    while (j >= 0) {
      if (arr[tmpCurr] < arr[j]) {
        let tmp = arr[tmpCurr];
        arr[tmpCurr] = arr[j];
        arr[j] = tmp;
        tmpCurr--;
      }

      j--;
    }
    console.log(arr);
  }

  return arr;
}

console.log(insertionSort([4, 2, 7, 1, 3]));
