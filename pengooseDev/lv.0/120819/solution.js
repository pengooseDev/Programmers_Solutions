function solution(money) {
  return [parseInt(money / CONSTANT.PRICE), money % CONSTANT.PRICE];
}

const CONSTANT = Object.freeze({
  PRICE: 5500,
});
