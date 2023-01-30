function solution(lottos, win_nums) {
  var answer = [];
  const correct = lottos.filter((lotto)=> win_nums.includes(lotto)).length
  const zero = lottos.filter((lotto)=> lotto === 0).length
  let max = 7 - correct === 7 ? 6 : 7 - correct
  let min = 7 - (zero + correct) === 7 ? 6 : 7 - (zero + correct)
  answer =  [ min,max ]
  return answer;
}