function solution(arr, k) {
  const answer = [];

  for (const num of arr) {
    if (answer.length === k) {
      return answer;
    }
    if (!answer.includes(num)) {
      answer.push(num);
    }
  }

  return [...answer, ...Array(k - answer.length).fill(-1)];
}
