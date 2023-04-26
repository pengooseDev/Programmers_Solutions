function solution(a, b) {
  if (a % 2 !== 0 && b % 2 !== 0) {
    return all1(a, b);
  } else if (a % 2 !== 0 || b % 2 !== 0) {
    return one1(a, b);
  } else {
    return no1(a, b);
  }
  function all1(a, b) {
    return a * a + b * b;
  }
  function one1(a, b) {
    return 2 * (a + b);
  }
  function no1(a, b) {
    return Math.abs(a - b);
  }
}
