// OX퀴즈
const input = [
  '5',
  'OOXXOXXOOO',
  'OOXXOOXXOO',
  'OXOXOXOXOXOXOX',
  'OOOOOOOOOO',
  'OOOOXOOOOXOOOOX'
];
const N = parseInt(input[0]); // 0번째 값인 5를 N에 입력
for ( let i = 1; i <= N ; i++){
  let count = 0;
  let sum = 0;
  for( let l = 0; l < input[i].length;l++){
    if( input[i][l] === "O"){
      count++; // 카운트값 증가시켜주기
    }else{
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}