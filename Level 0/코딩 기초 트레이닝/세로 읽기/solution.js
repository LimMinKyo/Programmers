function solution(my_string, m, c) {
  return [...my_string].filter((_, index) => index % m === c - 1).join("");
}
