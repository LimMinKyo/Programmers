const getFactorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * getFactorial(num - 1);
};

function solution(balls, share) {
  const result =
    getFactorial(balls) / (getFactorial(balls - share) * getFactorial(share));

  return Math.round(result);
}
