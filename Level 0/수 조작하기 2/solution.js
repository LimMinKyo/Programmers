const operations = {
  1: "w",
  "-1": "s",
  10: "d",
  "-10": "a",
};

function solution(numLog) {
  return numLog
    .slice(1)
    .map((num, index) => operations[num - numLog[index]])
    .join("");
}
