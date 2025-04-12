// Every recursion function always has a base case
function countdown(count) {
  console.log('Count down', count);
  if (count === 0) return;
  countdown(count - 1);
}

countdown(10);
