function solution(num, k) {
  const index = [...num.toString()].indexOf(k + "");
  return index >= 0 ? index + 1 : -1;
}
