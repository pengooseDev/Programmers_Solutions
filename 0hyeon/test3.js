// 상. 지뢰 탐지가 필요해!
function solution(N, arr1) {
  let x = [1, -1, 0, 0, 1, 1, -1, -1];
  let y = [0, 0, 1, -1, 1, -1, 1, -1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      map[i][j] = arr1.charAt(j);
    }
  }
  console.log(map);
  let answer = [];
  return answer;
}

let N = 5;
let arr1 = [
  ["1", ".", ".", ".", "."],
  [".", ".", "3", ".", "."],
  [".", ".", ".", ".", "."],
  [".", "4", ".", ".", "."],
  [".", ".", ".", "9", "."],
];
console.log(solution(N, arr1));
// [
//     [*, 4, 3, 3, 0],
//     [1, 4, *, 3, 0],
//     [4, 7, 7, 3, 0],
//     [4, *, M. 9, 9],
//     [4, 4, M. *, 9]
// ]

//  {'2', '.', '.', '.'},
//  {'.', '.', '9', '.'},
//  {'.', '3', '.', '2'},
//  {'.', '4', '.', '.'}

// [
//     [*, M, 9, 9],
//     [5, M, *, M],
//     [7, *, M, *],
//     [7, *, 9, 2]
// ]
