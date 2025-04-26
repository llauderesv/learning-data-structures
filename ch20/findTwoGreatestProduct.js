function findTwoGreatestProduct(nums) {
  if (nums.length < 2) {
    throw new Error('Array must contain at least two numbers');
  }

  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let num of nums) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  return max1 * max2;
}

console.log(findTwoGreatestProduct([3, 5, 1, 7, 9, 6]));
