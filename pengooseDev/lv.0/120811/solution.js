function solution(array) {
  array.sort((a, b) => a - b);
  let centerIdx = (array.length - 1) / 2;
  return array[centerIdx];
}
