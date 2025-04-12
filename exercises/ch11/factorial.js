function factorial(n, i = 1, product = 1) {
  if (i > n) return product;
  return factorial(n, i + 1, product * i);
}

console.log(factorial(3));
