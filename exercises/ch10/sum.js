function sum(low, high) {
  if (high <= low) return 1;
  return high + sum(low, high - 1);
}

console.log(sum(1, 10));
