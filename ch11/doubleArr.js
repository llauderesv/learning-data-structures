function doubleArr(arr, index) {
  if (index >= arr.length) {
    return;
  }
  arr[index] *= 2;
  doubleArr(arr, index + 1);

  return arr
}

console.log(doubleArr([1, 2, 3, 4, 5], 0));
