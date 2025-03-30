function median(array) {
  const middle = Math.floor(array.length / 2);
  // If array has even amount of numbers:
  if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2;
  } else {
    // If array has odd amount of numbers:
    return array[middle];
  }
}


console.log(median([1, 2, 3, 4, 5, 6, 7]))