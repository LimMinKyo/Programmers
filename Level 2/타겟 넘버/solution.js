// DFS, 깊이 우선 탐색
function solution(numbers, target) {
  let answer = 0;

  const dfs = (sum, index) => {
    if (numbers.length === index) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  };

  dfs(0, 0);

  return answer;
}
