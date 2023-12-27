function solution(s) {
  const map = new Map();

  return [...s].map((char, index) => {
    const result = map.get(char) !== undefined ? index - map.get(char) : -1;
    map.set(char, index);
    return result;
  });
}
