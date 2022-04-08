function solution(arr) {
  const answer =
    arr.length === 1 ? [-1] : arr.filter((item) => item !== Math.min(...arr));
  return answer;
}
