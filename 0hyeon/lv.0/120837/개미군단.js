//개미군단
function solution(hp) {
  var answer = 0;
  let i = Math.floor(hp / 5);
  let j = Math.floor(hp % 5) / 3;
  let k = Math.floor(hp % 5) % 3;
  return Math.floor(i + j + k);
}
