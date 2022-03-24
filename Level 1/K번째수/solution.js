function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    const [i, j, k] = command;
    const newArr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(newArr[k - 1]);
  });
  return answer;
}
