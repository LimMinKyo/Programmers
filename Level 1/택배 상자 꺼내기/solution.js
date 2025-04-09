function solution(n, w, num) {
  let isHaveToPopLastBox = true;
  const height = Math.ceil(n / w);
  const targetHeight = Math.ceil(num / w);
  const nRemain = n % w || n;
  const numRemain = num % w || num;

  if (height % 2 === targetHeight % 2 && nRemain < numRemain)
    isHaveToPopLastBox = false;
  if (height % 2 !== targetHeight % 2 && nRemain + numRemain <= w)
    isHaveToPopLastBox = false;

  return height - targetHeight + Number(isHaveToPopLastBox);
}
