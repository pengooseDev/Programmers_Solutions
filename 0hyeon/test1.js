// 하. 물건을 구매해볼까?
function solution(num) {
  let changes = 1000 - num;
  let coins = [500, 100, 50, 10];
  let answer = 0;
  for (let i = 0; i < coins.length; i++) {
    let quo = Math.floor(changes / coins[i]);
    changes -= coins[i] * quo;
    answer += quo;
  }
  return answer;
}
let num1 = 160;
console.log(solution(num1));
