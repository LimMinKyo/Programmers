function solution(brackets) {
  if (brackets[0] === ")") {
    return false;
  }

  const stack = [];

  for (const bracket of brackets.split("")) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length > 0 ? false : true;
}
