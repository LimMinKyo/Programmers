function solution(clothes) {
  const map = new Map();

  clothes.forEach(([cloth, kind]) => map.set(kind, (map.get(kind) || 0) + 1));

  return [...map.values()].reduce((acc, count) => acc * (count + 1), 1) - 1;
}
