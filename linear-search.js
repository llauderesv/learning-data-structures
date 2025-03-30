function linearSearch(arr, searchValue) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    if (arr[i] === searchValue) {
      return i;
    } else if (arr[i] > searchValue) {
      break;
    }
  }
  return null;
}

console.log(linearSearch([3, 17, 75, 80, 101], 101));
