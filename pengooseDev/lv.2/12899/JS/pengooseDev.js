function solution(n) {
  let answer = '';
  const myNum = ['4', '1', '2'];

  while (n > 0) {
    const num = myNum[n % 3];
    n = parseInt((n - 1) / 3);
    answer = num + answer;
  }

  return answer;
}

/*
자릿수 추가되는 점화식

3 / 12 / 39
 => n = 3 * (n + 1)
 => (n - 1) / 3 = n 

3   4
12  44
39  444
*/
