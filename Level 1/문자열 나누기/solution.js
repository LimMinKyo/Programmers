function solution(s) {
  let firstChar = "";
  let sameCount = 0;
  let diffCount = 0;

  let answer = 0;

  [...s].forEach((char) => {
    if (!firstChar) {
      firstChar = char;
      sameCount++;
      answer++;
      return;
    }

    char === firstChar ? sameCount++ : diffCount++;

    if (sameCount === diffCount) {
      firstChar = "";
      sameCount = 0;
      diffCount = 0;
    }
  });

  return answer;
}
