// 최대값과 소수가 아닌 수의 최소값
function solution(s){
  let splitWord =s.split(" ")
  let min = [];
  let max = [];

  for(let i = 0; i< splitWord.length;i++){
    // console.log(splitWord[i]);
    if (minority( splitWord[i] ) ){
      max.push(splitWord[i])
    }else {
      min.push(splitWord[i])
    } 
  }
	return `${Math.min(...min)} ${Math.max(...max)}`;
}

function minority(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return num > 1;
}

let s="97 75 88 99 95 92 73";

console.log(solution(s))