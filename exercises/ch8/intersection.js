function intersection(arr1, arr2) {
  let intersectArr = [];
  let hash = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!hash[arr1[i]]) {
      hash[arr1[i]] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (hash[arr2[j]]) {
      intersectArr.push(arr2[j]);
    }
  }

  return intersectArr;
}

const ans = intersection([2], [0, 2, 4, 6, 8]);
console.log(ans);
