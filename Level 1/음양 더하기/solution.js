function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((absolute, index) => {
    signs[index] ? (answer += absolute) : (answer -= absolute);
  });
  return answer;
}
