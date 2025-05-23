function solution(sequence, k) {
  const n = sequence.length;
  let [left, right] = [0, 0];
  let answer = [0, n];
  let sum = sequence[0];

  while (right !== n) {
    if (sum < k) {
      right++;
      sum += sequence[right];
    } else {
      if (sum === k && right - left < answer[1] - answer[0]) {
        answer = [left, right];
      }
      sum -= sequence[left];
      left++;
    }
  }

  return answer;
}
