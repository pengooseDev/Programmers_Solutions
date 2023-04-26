function solution(rank, attendance) {
  const rankMap = new Map();
  const array = [];
  let sum = 0;
  rank.map((el, idx) => {
    rankMap.set(el, attendance[idx]);
  });
  const resultData = [...rankMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .filter((el) => el[1] === true)
    .sort((a, b) => a[0] - b[0])
    .slice(0, 3)
    .map((el) => el[0]);
  for (let el of resultData) {
    array.push(rank.indexOf(el));
  }
  array.map((el, idx) => {
    idx === 0
      ? (sum += el * 10000)
      : idx === 1
      ? (sum += el * 100)
      : (sum += el * 1);
  });
  return sum;
}
