//2차원으로 만들기
function solution(num_list, n) {
  var result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    result = [...result, num_list.slice(n * i, n * i + n)];
  }
  return result;
}
