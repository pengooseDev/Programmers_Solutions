function solution(n) {
  const UNIT = CONSTANT.UNIT;
  let answer = CONSTANT.INITIAL_VALUE;

  while ((UNIT * answer) % n !== CONSTANT.REMAIN) {
    answer++;
  }

  return answer;
}

const CONSTANT = Object.freeze({
  UNIT: 6,
  INITIAL_VALUE: 1,
  REMAIN: 0,
});
