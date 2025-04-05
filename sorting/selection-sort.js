// we keep iterating until we keep the lowest value
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestValue = arr[i];
    let lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < lowestValue) {
        lowestIndex = j;
        lowestValue = arr[j];
      }
    }
    let tmp = arr[i];
    arr[i] = lowestValue;
    arr[lowestIndex] = tmp;
  }

  return arr;
}

console.log(selectionSort([4, 2, 7, 1, 3]));
