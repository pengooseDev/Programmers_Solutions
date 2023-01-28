const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

let curr = input;
let sum;
let answer = 0;

while (1) {
  answer += 1;

  sum = parseInt(curr / 10) + (curr % 10);
  curr = (curr % 10) * 10 + (sum % 10);

  if (curr === input) break;
}

console.log(answer);
