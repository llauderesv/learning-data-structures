function printAllArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printAllArray(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}

printAllArray([
  1,
  2,
  3,
  7,
  [8, [4, 5, 6], [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
]);
