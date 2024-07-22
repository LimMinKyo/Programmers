function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  const sum1 = sum(arr1);
  const sum2 = sum(arr2);

  return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
