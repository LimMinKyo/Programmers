function solution(n, s, a, b, fares) {
  const graph = Array.from({ length: n + 1 }, () => []);

  fares.forEach(([start, end, cost]) => {
    graph[start].push([end, cost]);
    graph[end].push([start, cost]);
  });

  const distancesFromA = dijkstra(a, n, graph);
  const distancesFromB = dijkstra(b, n, graph);
  const distancesFromS = dijkstra(s, n, graph);

  let answer = Infinity;

  for (let i = 1; i <= n; i++) {
    answer = Math.min(
      answer,
      distancesFromS[i] + distancesFromA[i] + distancesFromB[i]
    );
  }

  return answer;
}

function dijkstra(start, n, graph) {
  const queue = [[start, 0]];
  const distances = Array(n + 1).fill(Infinity);
  distances[start] = 0;

  while (queue.length) {
    const [node, cost] = queue.pop();

    graph[node].forEach(([nextNode, nextCost]) => {
      const newCost = cost + nextCost;

      if (distances[nextNode] > newCost) {
        distances[nextNode] = newCost;
        queue.push([nextNode, newCost]);
        queue.sort((a, b) => a[1] - b[1]);
      }
    });
  }

  return distances;
}
