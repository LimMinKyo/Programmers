function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);

  visited.forEach((isVisited, computer) => {
    if (!isVisited) {
      dfs(computer, computers, visited);
      answer++;
    }
  });

  return answer;
}

function dfs(computer, computers, visited) {
  visited[computer] = true;

  computers[computer].forEach((isConnected, currentComputer) => {
    if (isConnected && !visited[currentComputer]) {
      dfs(currentComputer, computers, visited);
    }
  });
}
