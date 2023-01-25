function solution(babbling) {
  const map = {
    aya: 1,
    ye: 2,
    woo: 3,
    ma: 4,
  };

  const repeat = parseInt(getLongestWord(babbling) / 2);
  const repeatArr = new Array(repeat);
  const res = babbling.map((word) => {
    for (let _ of repeatArr) {
      Object.entries(map).forEach(([soundable, number]) => {
        word = word.replace(soundable, number);
      });
    }
    return word;
  });

  const answer = res.filter((v) => {
    return Number(v) && !checkContinulity(v);
  }).length;

  return answer;
}

const getLongestWord = (babbling) => {
  const lengthArr = babbling.map((i) => i.length);
  return Math.max(...lengthArr);
};

const checkContinulity = (string) => {
  let result = false;
  const arr = Array.from(string);
  arr.reduce((acc, curr) => {
    if (acc === curr) {
      result = true;
    }
    return curr;
  });

  return result;
};
