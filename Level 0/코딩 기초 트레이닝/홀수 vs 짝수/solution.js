function solution(num_list) {
  let oddSum = 0;
  let evenSum = 0;

  num_list.forEach((num, index) => {
    if (index % 2) oddSum += num;
    else evenSum += num;
  });

  return Math.max(oddSum, evenSum);
}
