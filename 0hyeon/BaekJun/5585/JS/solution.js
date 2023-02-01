// 거스름돈
const input = 1

let changes = 1000 - input
let count = 0;
const coins = [500, 100, 50, 10, 5, 1];
for ( let i = 0; i< coins.length;i++){
  let quo = Math.floor(changes / coins[i])//몫
  changes -= quo * coins[i];
  count += quo;
}
console.log(count);
return count;

