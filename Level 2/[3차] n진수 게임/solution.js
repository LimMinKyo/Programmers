function solution(n, t, m, p) {
  let string = "";
  let num = 0;

  while (string.length < m * t) {
    string += num.toString(n);
    num++;
  }

  let answer = "";

  for (let i = p - 1; i < string.length; i += m) {
    answer += string[i];
    if (answer.length === t) {
      return answer.toUpperCase();
    }
  }
}
