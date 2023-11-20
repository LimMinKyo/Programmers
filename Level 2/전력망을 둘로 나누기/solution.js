function solution(n, wires) {
  let answer = Infinity;

  wires.forEach(([eraseFrom, eraseTo]) => {
    const map = new Map();

    wires.forEach(([from, to]) => {
      if (from === eraseFrom && to === eraseTo) {
        return;
      }

      map.set(from, map.get(from) ? [...map.get(from), to] : [to]);
      map.set(to, map.get(to) ? [...map.get(to), from] : [from]);
    });

    const queue = [1];
    const visited = [];

    while (queue.length !== 0) {
      const index = queue.pop();

      if (visited.includes(index)) {
        continue;
      }

      if (map.get(index)) {
        queue.push(...map.get(index));
      }

      visited.push(index);
    }

    const tree1 = n - visited.length;
    const tree2 = visited.length;

    answer = Math.min(answer, Math.abs(tree1 - tree2));
  });

  return answer;
}
