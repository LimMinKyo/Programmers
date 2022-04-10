function solution(x) {
  const numArr = x.toString().split('').map((value) => +value);
  const sum = numArr.reduce((a, b) => a + b);
  return x % sum === 0 ? true : false;
}
