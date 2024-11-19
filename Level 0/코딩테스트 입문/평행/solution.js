function solution(dots) {
  const [a, b, c, d] = dots;

  const case1 = getIsParrarel(a, b, c, d);
  const case2 = getIsParrarel(a, c, b, d);
  const case3 = getIsParrarel(a, d, b, c);

  return [case1, case2, case3].includes(true) ? 1 : 0;
}

function getInclination(a, b) {
  const [x1, y1] = a;
  const [x2, y2] = b;
  return (y2 - y1) / (x2 - x1);
}

function getIsParrarel(a, b, c, d) {
  return getInclination(a, b) === getInclination(c, d);
}
