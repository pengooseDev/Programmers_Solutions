function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) n % i === 0 && i % 2 === 1 ? (answer += 1) : '';

  return answer;
}
