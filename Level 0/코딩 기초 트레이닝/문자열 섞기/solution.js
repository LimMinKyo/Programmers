function solution(str1, str2) {
  return [...str1].map((char, index) => char + str2[index]).join("");
}
