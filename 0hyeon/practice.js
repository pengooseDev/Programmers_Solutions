function solution(month, day){
	let result=""
  let dateStr = "2022-" + month + "- " + day;
  let date = new Date(dateStr);
  date.setDate(date.getDate() + 99)
  let monthly = date.getMonth()
  let daily = date.getDate()
  result = `${monthly}월 ${daily}월`
  return result;
  
}
console.log(solution(11,27));
console.log(solution(6,22));
console.log(solution(1,18));