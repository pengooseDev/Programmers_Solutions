function solution(price) {
  if (500000 <= price) return (price *= 0.8);
  if (300000 <= price) return (price *= 0.9);
  if (100000 <= price) return (price *= 0.95);
  return Math.floor(price);
}
