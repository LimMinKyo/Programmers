function solution(array) {
  const map = new Map();

  array.forEach((el) => {
    map.set(el, (map.get(el) || 0) + 1);
  });

  const sortedMap = [...map].sort((a, b) => b[1] - a[1]);

  return sortedMap[0][1] === sortedMap[1]?.[1] ? -1 : sortedMap[0][0];
}
