function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

sortBy([5, 4, 1, 2, 3], x => x);

const out = [5, 4, 1, 2, 3].sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(out);
// 1;

function hasDuplicates(arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!hashMap.has(arr[i])) {
      hashMap.set(arr[i], i);
    }
  }

  console.log(hashMap);
}

hasDuplicates([1, 2, 3, 4, 1]);

function greatestNumber(arr) {
  let greatestValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (greatestValue < arr[i]) {
      greatestValue = arr[i];
    }
  }

  return greatestValue;
}

console.log(greatestNumber([1, 2, 3, 4, 1]));
