function solution(arr) {
  const maxNum = Math.max(...arr);
  let whileCount = maxNum;
  let leastCommonMultiple;

  while (!leastCommonMultiple) {
    const isAllDivide = arr.every((num) => whileCount % num === 0);
    if (isAllDivide) {
      leastCommonMultiple = whileCount;
    }
    whileCount++;
  }

  return leastCommonMultiple;
}
