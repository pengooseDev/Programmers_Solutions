function solution(M, N) {
  if (M === 1 && N === 1) return 0;
  const column = M - 1;
  const row = (N - 1) * M;
  return column + row;
}
