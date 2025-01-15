function solution(num, total) {
  const average = total / num;
  const start = Math.ceil(average - Math.floor(num / 2));
  return Array.from({ length: num }, (_, i) => start + i);
}
