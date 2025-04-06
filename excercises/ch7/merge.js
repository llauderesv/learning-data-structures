function merge(arr1, arr2) {
  const mergedArray = [];
  let i = 0;

  while (i < arr1.length) {
    mergedArray[mergedArray.length] = arr1[i];
    i++;
  }

  i = 0;

  while (i < arr2.length) {
    mergedArray[mergedArray.length] = arr2[i];
    i++;
  }

  return mergedArray;
}

const ans = merge([1, 2, 3], [2, 3]);
console.log(ans)

export {}
