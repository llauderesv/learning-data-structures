function firstDuplicates(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (hash[item]) {
      return item;
    } else {
      hash[item] = 1;
    }
  }
}

console.log(firstDuplicates(['a', 'b', 'b', 'd', 'c', 'e']));
