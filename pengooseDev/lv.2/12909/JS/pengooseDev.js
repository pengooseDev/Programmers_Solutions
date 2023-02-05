function solution(s) {
  let answer = true;
  const stack = [];
  if (s[0] === ')') return false;

  for (let i of s.split('')) {
    if (i === '(') {
      stack.push(i);
      continue;
    }

    if (i === ')') {
      if (i.length && stack.at(-1) === '(') {
        stack.pop();
        continue;
      }

      stack.push(i);
    }
  }

  return stack.length ? false : true;
}
