function solution(my_string) {
  return my_string.split(/\D+/g).reduce((acc, num) => acc + Number(num), 0);
}
