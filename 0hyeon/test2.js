// 중. 동그라미 엑스로 숫자를?
function solution(str) {
  let answer = 0;
  let count = 0;
  let wordSplit = str.split("");
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] === "O") {
      count++;
    } else {
      count = 0;
    }
    answer += count;
  }
  return answer;
}
let str = "OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str));
