function solution(ingredient) {
  let answer = 0;
  const stack = [];

  ingredient.forEach((item) => {
    stack.push(item);

    if (
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      answer++;
      stack.splice(-4);
    }
  });

  return answer;
}
