function solution(N, road, K) {
  const graph = buildGraph(N, road);
  const distances = Array(N + 1).fill(Infinity);

  const queue = [[1, 0]];
  distances[1] = 0;

  while (queue.length) {
    const [node, nodeCost] = queue.shift();

    graph[node].forEach(([nextNode, nextNodeCost]) => {
      const cost = nodeCost + nextNodeCost;

      if (cost < distances[nextNode]) {
        distances[nextNode] = cost;
        queue.push([nextNode, cost]);
      }
    });
  }

  return distances.filter((distance) => distance <= K).length;
}

function buildGraph(N, road) {
  const graph = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a, b, cost]) => {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  });

  return graph;
}
