function solution(age) {
  return [...String(age)].map((num) => String.fromCharCode(+num + 97)).join("");
}
