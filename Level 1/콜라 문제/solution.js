function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const willGetCola = Math.floor(n / a) * b;
    answer += willGetCola;
    n = (n % a) + willGetCola;
  }

  return answer;
}
