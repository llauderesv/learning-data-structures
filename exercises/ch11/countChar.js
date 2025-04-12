function countChar(arr, totalCount) {
  if (arr.length === 0) return totalCount;
  totalCount += arr[0].length;
  return countChar(arr.slice(1), totalCount);
}

const ans = countChar(['ab', 'c', 'def', 'ghij'], 0);

console.log(ans);
