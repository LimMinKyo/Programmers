function solution(rsp) {
  const rspMap = {
    2: 0,
    0: 5,
    5: 2,
  };

  return [...rsp].map((value) => rspMap[value]).join("");
}
