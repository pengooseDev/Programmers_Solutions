function solution(my_string, letter) {
  var answer = [];
  for ( a of my_string){
      if(a !== letter){
          answer.push(a)
      }
  }
  
  return answer.join("");
}