function longestSubsequence(nums) {
  const numSet = new Set(nums); // Store all numbers in a set for O(1) lookups
  let longest = 0;

  for (const num of nums) {
    console.log(num - 1)
    // Check if the current number is the start of a sequence
    // 9, 
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count consecutive numbers
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Update the longest streak
      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
}
console.log(longestSubsequence([10, 5, 12, 3, 55, 30, 4, 11, 2]));
