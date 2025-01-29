function foo(a, b) {
  if (Object.is(a, 0) || Object.is(b, 0)) {
    return 0; 
  }
  return a / b;
}