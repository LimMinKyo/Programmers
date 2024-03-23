function solution(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; ) {
    if (!stack.length) {
      stack.push(arr[i]);
      i++;
      continue;
    }

    if (stack.at(-1) < arr[i]) {
      stack.push(arr[i]);
      i++;
    } else {
      stack.pop();
    }
  }

  return stack;
}
