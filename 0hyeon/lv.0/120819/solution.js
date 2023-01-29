function solution(money) {
  var answer = [];
  let americano = 5500;
  let minCoffee = Math.floor(money/americano);
  let changes = money - (minCoffee * americano) 
  answer.push(minCoffee,changes)
  return answer;
}