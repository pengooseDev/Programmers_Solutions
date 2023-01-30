function solution(nums) {
  var answer = 0;
  let sumNum = 0;

  //1. 3개 뽑아서 더한거 배열에 넣기 
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumNum = nums[i] + nums[j] + nums[k];
        
        //2. 소수인지 확인
        if (minority(sumNum)) answer++;
      }
    }
  }

  return answer;
}
//소수찾기 
function minority(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return num > 1;
}