function solution(a, b, c) {
  const dices = [a, b, c];
  const set = new Set(dices);

  switch (set.size) {
    case 1:
      return calculate(dices, 3);
    case 2:
      return calculate(dices, 2);
    case 3:
      return calculate(dices);
  }
}

function calculate([a, b, c], n = 1) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= a ** i + b ** i + c ** i;
  }

  return result;
}
