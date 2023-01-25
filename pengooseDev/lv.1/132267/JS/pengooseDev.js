function solution(a, b, n) {
  let answer = 0;
  let cola;
  let remainBottle = n;

  while ((Array.from(String(a)), (value) => Number(value))) {
    cola = getNewCola(a, b, remainBottle);
    if (!cola && remainBottle < a) return answer;
    remainBottle = getRemainBottle(a, remainBottle) + cola;
    answer += cola;
  }
}

const getNewCola = (a, b, remainBottle) => {
  if (!remainBottle) return 0;
  return b * parseInt(remainBottle / a);
};

const getRemainBottle = (a, remainBottle) => {
  return remainBottle % a;
};
