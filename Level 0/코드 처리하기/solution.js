function solution(code) {
  let answer = "";
  let mode = 0;

  [...code].forEach((char, index) => {
    if (char === "1") {
      mode = mode ? 0 : 1;
      return;
    }

    if (index % 2 === mode) {
      answer += char;
    }
  });

  return answer.length ? answer : "EMPTY";
}
