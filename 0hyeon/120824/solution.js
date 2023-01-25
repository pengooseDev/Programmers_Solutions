function solution(num_list) {
  let one = 0;
  let two = 0;
  for ( let i = 0; i < num_list.length; i++){
      if( num_list[i] % 2 === 0){
          two++;   
      }else{
          one++;
      }
      
  }
  var answer = [two,one];
  return answer;
}