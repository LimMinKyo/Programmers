const getFactorial = (num) => {
  if (num <= 1) {
    return 1;
  }

  return num * getFactorial(num - 1);
};

function solution(n) {
  let answer;

  for (let i = 1; getFactorial(i) <= n; i++) {
    answer = i;
  }

  return answer;
}
