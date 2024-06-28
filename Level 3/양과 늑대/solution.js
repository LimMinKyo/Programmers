function solution(info, edges) {
  const tree = buildTree(info, edges);

  let maxSheep = 0;

  const queue = [
    { current: 0, sheepCount: 1, wolfCount: 0, visited: new Set() },
  ];

  while (queue.length) {
    const { current, sheepCount, wolfCount, visited } = queue.shift();

    maxSheep = Math.max(maxSheep, sheepCount);

    tree[current].forEach((node) => visited.add(node));

    [...visited].forEach((nextNode) => {
      const isWolf = info[nextNode];

      const newVisited = new Set(
        [...visited].filter((node) => node !== nextNode)
      );
      if (!isWolf) {
        queue.push({
          current: nextNode,
          sheepCount: sheepCount + 1,
          wolfCount,
          visited: newVisited,
        });
      } else if (isWolf && sheepCount !== wolfCount + 1) {
        queue.push({
          current: nextNode,
          sheepCount,
          wolfCount: wolfCount + 1,
          visited: newVisited,
        });
      }
    });
  }

  return maxSheep;
}

function buildTree(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);

  edges.forEach(([start, end]) => {
    tree[start].push(end);
  });

  return tree;
}
