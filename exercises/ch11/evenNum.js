function evenNum(nums, newArr = []) {
  if (nums.length === 0) {
    return newArr;
  }

  if (nums[0] % 2 === 0) {
    newArr.push(nums[0]);
  }

  return evenNum(nums.slice(1), newArr);
}

const ans = evenNum([2, 7, 11, 10, 16]);

console.log(ans);
export {};
