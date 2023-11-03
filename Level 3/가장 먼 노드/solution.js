function solution(n, edge) {
  const node = new Map();

  edge.forEach(([n1, n2]) => {
    node.get(n1) ? node.get(n1).push(n2) : node.set(n1, [n2]);
    node.get(n2) ? node.get(n2).push(n1) : node.set(n2, [n1]);
  });

  let answer = 0;
  const queue = [1];
  while (true) {
    [...queue].forEach((item) => {
      queue.shift();

      if (node.has(item)) {
        node.get(item).forEach((num) => {
          if (node.has(num)) {
            queue.push(num);
          }
        });
        node.delete(item);
      }
    });

    if (!node.size) {
      return answer;
    }

    answer = node.size;
  }
}
