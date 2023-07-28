function solution(A, B) {
  let sum = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((ANumber, index) => {
    sum += ANumber * B[index];
  });

  return sum;
}
