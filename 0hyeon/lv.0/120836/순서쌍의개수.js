function solution(n) {
  let ans = 0;
  for (let i = 0; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;
  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}

function solution(n) {
  let ans = 0;
  for (let i = 0; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;
  return Math.sqrt(n) % 1 === 0 ? ans + 1 : ans;
}
