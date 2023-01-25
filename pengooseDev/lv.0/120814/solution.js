function solution(n) {
  const UNIT = CONSTANT.UNIT;
  let answer = CONSTANT.INITIAL_VALUE;

  while (UNIT * answer < n) {
    answer += CONSTANT.COUNT_UNIT;
  }

  return answer;
}

const CONSTANT = Object.freeze({
  UNIT: 7,
  INITIAL_VALUE: 1,
  COUNT_UNIT: 1,
});
