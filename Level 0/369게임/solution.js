function solution(order) {
  const set = new Set([3, 6, 9]);
  return [...order.toString()].filter((num) => set.has(+num)).length;
}
