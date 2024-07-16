function solution(n, edges) {
  const tree = buildTree(edges);

  const leaf = bfs(tree, 1);
  const father = bfs(tree, leaf.at(-1)[0]);

  return leaf.at(-1)[1] === leaf.at(-2)[1]
    ? father.at(-1)[1]
    : father.at(-2)[1];
}

function buildTree(edges) {
  const tree = {};

  edges.forEach(([start, end]) => {
    if (!tree[start]) tree[start] = [];
    if (!tree[end]) tree[end] = [];

    tree[start].push(end);
    tree[end].push(start);
  });

  return tree;
}

function bfs(tree, start) {
  const result = [];
  const visited = {};
  const queue = new Queue();

  queue.push([start, 0]);
  visited[start] = true;

  while (queue.size()) {
    const [cur, distance] = queue.popleft();
    result.push([cur, distance]);

    tree[cur].forEach((node) => {
      if (!visited[node]) {
        queue.push([node, distance + 1]);
        visited[node] = true;
      }
    });
  }

  return result;
}

class Queue {
  constructor() {
    this.storage = new Map();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.storage.size;
  }

  push(value) {
    if (!this.storage.size) {
      this.storage.set(0, value);
    } else {
      this.rear += 1;
      this.storage.set(this.rear, value);
    }
  }

  popleft() {
    const item = this.storage.get(this.front);

    if (this.storage.size === 1) {
      this.storage.clear();

      this.front = 0;
      this.rear = 0;
    } else {
      this.storage.delete(this.front);
      this.front += 1;
    }

    return item;
  }
}
