function solution(my_string) {
  return [...my_string.replaceAll(/[^0-9]/g, "")].map((value) => +value).sort();
}
