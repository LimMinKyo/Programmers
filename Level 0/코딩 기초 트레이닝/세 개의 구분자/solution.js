function solution(myStr) {
  const answer = myStr.split(/[a|b|c]/).filter((str) => str);
  return answer.length ? answer : ["EMPTY"];
}
