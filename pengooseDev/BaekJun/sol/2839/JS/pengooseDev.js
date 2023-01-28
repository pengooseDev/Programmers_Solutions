const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

let answer = 0;
let sugar = input;
const myArr = [5, 3];

for (let i of myArr) {
  answer += parseInt(sugar / i);
  sugar = sugar % i;
}

!sugar ? console.log(answer) : console.log(-1);
