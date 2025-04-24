function solution(order) {
  const n = order.length;
  order.reverse();
  const stack = [];

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    stack.push(i);

    while (
      stack.length &&
      stack[stack.length - 1] === order[order.length - 1]
    ) {
      order.pop();
      stack.pop();
      answer++;
    }
  }

  return answer;
}
