//배열 두 배 만들기
function solution(numbers) {
  var answer = [];
  for (a of numbers) {
    answer.push(a * 2);
  }
  return answer;
}
