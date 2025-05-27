function solution(storey) {
  let count = 0;

  while (storey) {
    const rest = storey % 10;
    storey = Math.floor(storey / 10);

    if (rest < 5 || (rest === 5 && storey % 10 < 5)) {
      count += rest;
    } else {
      count += 10 - rest;
      storey++;
    }
  }

  return count;
}
