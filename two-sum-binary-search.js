function twoSum(nums, target) {
  const numWithIndex = nums.map((num, index) => ({ num, index }));
  numWithIndex.sort((a, b) => a.index - b.index);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = numWithIndex[left].num + numWithIndex[right].num

    if (sum === target) {
      return [numWithIndex[left].index, numWithIndex[right].index];
    } else if (sum > target) {
      right--;
    } else {
      left++
    }
  }
}

const ans = twoSum([2, 7, 11, 15], 9)
console.log(ans)

export {};
