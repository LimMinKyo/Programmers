function solution(n, costs) {
  let answer = 0;
  const parent = [];
  for (let i = 0; i < n; i++) {
    parent.push(i);
  }

  costs.sort((a, b) => a[2] - b[2]);

  costs.forEach((cost) => {
    if (findParent(parent, cost[0]) !== findParent(parent, cost[1])) {
      answer += cost[2];
      unionParent(parent, cost[0], cost[1]);
    }
  });

  return answer;
}

function findParent(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return findParent(parent, parent[x]);
}

function unionParent(parent, x, y) {
  const n1 = findParent(parent, x);
  const n2 = findParent(parent, y);

  if (n1 < n2) {
    parent[n2] = n1;
    return;
  }

  parent[n1] = n2;
}
