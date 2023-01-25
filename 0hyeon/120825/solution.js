function solution(my_string, n) {
  var answer = [];
  for (a of my_string){
      for ( let i = 0; i<n; i++){
          answer.push(a)
      }
  }
  return answer.join("");
}