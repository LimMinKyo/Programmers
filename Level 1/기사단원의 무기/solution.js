function solution(number, limit, power) {
  const numbers = Array.from({ length: number }, (_, i) => i + 1);
  const measureCounts = numbers.map(getMeasureCount);
  return measureCounts.reduce(
    (acc, cur) => acc + (cur > limit ? power : cur),
    0
  );
}

function getMeasureCount(number) {
  let measureCount = 0;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      measureCount++;

      if (i * i !== number) {
        measureCount++;
      }
    }
  }

  return measureCount;
}
