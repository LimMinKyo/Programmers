const operations = {
  ">=": (n, m) => n >= m,
  ">!": (n, m) => n > m,
  "<=": (n, m) => n <= m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const operation = operations[ineq + eq];
  return Number(operation(n, m));
}
