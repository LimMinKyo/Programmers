function solution(n, computers) {
  const visited = Array(n).fill(false);
  let count = 0;

  const dfs = (i) => {
    visited[i] = true;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] && !visited[j]) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}
