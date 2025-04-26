function missingInt(arr) {
  const numSet = new Set(arr); // Store all numbers in a set
  const n = arr.length; // The array should contain numbers from 0 to n

  for (let i = 0; i <= n; i++) {
    if (!numSet.has(i)) {
      return i; // Return the missing number
    }
  }

  return -1; // If no number is missing
}

console.log(missingInt([2, 3, 0, 6, 1, 5])); // Output: 4
