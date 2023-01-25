function solution(slice, n) {
  var answer = 1;
  while(( (answer * slice) / n ) < 1 ){
      answer +=1;
  }
  return answer;
}