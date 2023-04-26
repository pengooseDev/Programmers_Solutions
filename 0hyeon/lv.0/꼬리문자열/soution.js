function solution(str_list, ex) {
  let sumWord = "";
  for (let el of str_list) {
    if (el.includes(ex)) continue;
    sumWord += el;
  }
  return sumWord;
}
