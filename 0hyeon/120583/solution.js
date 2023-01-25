//중복된 숫자 개수
function solution(array, n) {
  var answer = 0;
  for (a of array) {
    if (a === n) {
      answer++;
    }
  }
  return answer;
}
