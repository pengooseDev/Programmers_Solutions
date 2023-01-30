function solution(numbers) {
  var answer = [];
  let sorted = numbers.sort((a,b)=> a-b);
  for ( let i = 0; i < sorted.length;i++){
      for ( let l = i + 1; l < sorted.length;l++){
          if(!answer.includes(sorted[i]+sorted[l])) answer.push(sorted[i]+sorted[l])
      }    
  }
  //answer = [...new Set(answer)]
  return answer.sort((a,b)=>a-b);
}