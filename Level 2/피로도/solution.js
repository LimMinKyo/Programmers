function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  const answer = dfs(k, 0, dungeons, visited);
  return answer;
}

function dfs(k, count, dungeons, visited) {
  let answer = count;

  dungeons.forEach((dungeon, index) => {
    if (k >= dungeon[0] && !visited[index]) {
      visited[index] = true;
      answer = Math.max(
        answer,
        dfs(k - dungeon[1], count + 1, dungeons, visited)
      );
      visited[index] = false;
    }
  });

  return answer;
}
