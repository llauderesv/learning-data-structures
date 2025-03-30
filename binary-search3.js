// Using custom comparator
function binarySearch3(arr, target, comparator) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cmp = comparator(arr[mid], target);

    if (cmp === 0) return mid; // Found target
    else if (cmp < 0) left = mid + 1; // Search right
    else right = mid - 1; // Search left
  }

  return -1; // Not found
}

const numbers = [2, 4, 6, 8, 10, 12, 14];

const numericComparator = (a, b) => a - b;

console.log(binarySearch3(numbers, 8, numericComparator));
