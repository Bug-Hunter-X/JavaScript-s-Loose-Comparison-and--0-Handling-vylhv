function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This will cause an error if a or b is -0
  }
  return a / b;
}