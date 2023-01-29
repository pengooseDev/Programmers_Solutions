function solution(numbers) {
  var answer = 0;
  let sum = 0;
  for (a of numbers){
      sum += a
  }
  return sum/numbers.length;
}