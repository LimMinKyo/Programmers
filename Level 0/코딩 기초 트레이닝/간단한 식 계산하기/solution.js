const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(binomial) {
  const [a, operator, b] = binomial.split(" ");
  return operators[operator](+a, +b);
}
