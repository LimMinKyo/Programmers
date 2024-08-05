function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);

  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const queue = [[1, 0]];
  const distances = Array(n + 1).fill(0);
  const visited = Array(n + 1).fill(false);
  visited[1] = true;

  while (queue.length) {
    const [node, distance] = queue.shift();
    distances[node] = distance;

    graph[node].forEach((nextNode) => {
      if (!visited[nextNode]) {
        queue.push([nextNode, distance + 1]);
        visited[nextNode] = true;
      }
    });
  }

  const maxDistance = Math.max(...distances);

  return distances.filter((distance) => distance === maxDistance).length;
}
