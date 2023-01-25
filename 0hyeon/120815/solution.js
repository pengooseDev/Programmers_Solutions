function solution(n) {
  var answer = 1;
  while((answer * 6) % n !=0){
      answer += 1
  }
  
  return answer;
}
//반복이 시작되기 전에 조건문은 참,거짓을 판단받게 된다. 만약 조건문이 참이라면, 
//while문 안의 문장들이 실행된다. 거짓이라면, 문장은 그냥 while 반복문 후로 넘어간다.

