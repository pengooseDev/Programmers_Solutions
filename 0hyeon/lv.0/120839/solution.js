//가위 바위 보
function solution(rsp) {
  const setting = {
    2: "0",
    0: "5",
    5: "2",
  };
  return rsp
    .split("")
    .map((el) => setting[el])
    .join("");
}
