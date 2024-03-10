function solution(a, b, c, d) {
  const map = new Map();

  [a, b, c, d].forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  const arr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  const maxCount = Math.max(...map.values());
  const [p, q, r, s] = arr;

  switch (arr.length) {
    case 1:
      return 1111 * p;
    case 2:
      return maxCount === 2 ? (p + q) * Math.abs(p - q) : (10 * p + +q) ** 2;
    case 3:
      return q * r;
    case 4:
      return Math.min(p, q, r, s);
  }
}
