function solution(slice, n) {
  const UNIT = slice;
  let answer = CONSTANT.INITIAL_VALUE;

  while (UNIT * answer < n) {
    answer++;
  }

  return answer;
}

const CONSTANT = Object.freeze({
  INITIAL_VALUE: 1,
});
