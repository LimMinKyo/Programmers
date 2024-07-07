function solution(arr, flag) {
  return arr.reduce(
    (prev, num, index) =>
      flag[index]
        ? [...prev, ...Array(num * 2).fill(num)]
        : prev.slice(0, -num),
    []
  );
}
