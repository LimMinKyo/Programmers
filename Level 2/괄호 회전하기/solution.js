function solution(s) {
  let answer = 0;
  const mapping = { "}": "{", "]": "[", ")": "(" };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotatedS = s.slice(i) + s.slice(0, i);

    for (let j = 0; j < s.length; j++) {
      if (rotatedS[j] === "[" || rotatedS[j] === "(" || rotatedS[j] === "{") {
        stack.push(rotatedS[j]);
        continue;
      }

      if (stack[stack.length - 1] === mapping[rotatedS[j]]) {
        stack.pop();
      } else {
        stack.push(rotatedS[j]);
      }
    }

    if (stack.length === 0) {
      answer++;
    }
  }

  return answer;
}
