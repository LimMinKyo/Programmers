function solution(clothes) {
  const map = new Map();

  for (const [cloth, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }

  let answer = 1;

  for (const count of map.values()) {
    answer *= count + 1;
  }

  return answer - 1;
}
