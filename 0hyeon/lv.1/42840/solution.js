function solution(answers) {
  let answer = []
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let a1Len = answers.filter((a,i)=> a === a1[i % a1.length]).length;
  let a2Len = answers.filter((a,i)=> a === a2[i % a2.length]).length;
  let a3Len = answers.filter((a,i)=> a === a3[i % a3.length]).length;
  const max = Math.max(a1Len,a2Len,a3Len)
  if(max === a1Len) answer.push(1)
  if(max === a2Len) answer.push(2)
  if(max === a3Len) answer.push(3)
  return answer
}