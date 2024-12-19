function solution(lines) {
  const line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (let i = a; i < b; i++) {
      line[i + 100]++;
    }
  });

  return line.reduce((acc, cur) => (cur > 1 ? acc + 1 : acc), 0);
}
