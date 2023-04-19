function solution(participant, completion) {
  const map = new Map();
  participant.forEach((el) => {
    const data = map.get(el) || 0;
    map.set(el, data + 1);
  });
  completion.forEach((el) => {
    const data = map.get(el) || 0;
    map.set(el, data - 1);
  });
  for (const [key, value] of map) {
    if (value) {
      return key;
    }
  }
}
