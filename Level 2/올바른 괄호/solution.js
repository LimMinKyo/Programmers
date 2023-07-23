function solution(brackets) {
  brackets = brackets.split("");

  const stack = [];

  if (brackets[0] === ")") {
    return false;
  }

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(") {
      stack.push(brackets[i]);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}
