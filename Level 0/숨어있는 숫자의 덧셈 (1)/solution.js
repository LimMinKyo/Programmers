function solution(my_string) {
  return [...my_string.replaceAll(/[^0-9]/g, "")].reduce(
    (acc, num) => acc + +num,
    0
  );
}
