//First try
function solution(order) {
    return [...String(order)].filter(num => num == 3 | num == 6 | num == 9).length;
}