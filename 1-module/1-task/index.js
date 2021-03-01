function factorial(n) {
  let count = 1;

  while (n >= 1) {
    count *= n;
    --n;
  }

  return count;
}
