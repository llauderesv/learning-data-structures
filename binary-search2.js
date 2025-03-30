export function binarySearch2(length, compareToKey) {
  let low = 0,
    high = length - 1;

  while (low <= high) {
    const mid = ((low + high) / 2) | 0;
    const comp = compareToKey(mid);
    if (comp < 0) {
      low = mid + 1;
    } else if (comp > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -(low + 1);
}

function compareTo(key) {
  return (index) => {
    console.log(array[index],key)
    return array[index] - key;
  };
}
const array = [1, 4, 5, 7, 55, 59, 60, 61, 64, 69];

console.log(binarySearch2(10, compareTo(55)));
