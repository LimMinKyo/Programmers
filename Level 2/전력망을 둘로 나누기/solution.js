function solution(n, wires) {
  const graph = new Graph(n, wires);

  let answer = Infinity;

  wires.forEach(([a, b]) => {
    graph.cutWire(a, b);

    countA = graph.dfs(a, b);
    countB = n - countA;

    answer = Math.min(answer, Math.abs(countA - countB));

    graph.connectWire(a, b);
  });

  return answer;
}

class Graph {
  constructor(n, wires) {
    this.graph = Array.from({ length: n + 1 }, () => []);

    wires.forEach(([a, b]) => {
      this.graph[a].push(b);
      this.graph[b].push(a);
    });
  }

  cutWire(a, b) {
    this.graph[a] = this.graph[a].filter((item) => item !== b);
    this.graph[b] = this.graph[b].filter((item) => item !== a);
  }

  connectWire(a, b) {
    this.graph[a].push(b);
    this.graph[b].push(a);
  }

  dfs(node, parent) {
    let count = 1;

    this.graph[node].forEach((child) => {
      if (child !== parent) {
        count += this.dfs(child, node);
      }
    });

    return count;
  }
}
