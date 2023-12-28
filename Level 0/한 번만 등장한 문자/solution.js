function solution(s) {
  const result = [];

  [...s].forEach((char) => {
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      result.push(char);
    }
  });

  return result.sort().join("");
}
