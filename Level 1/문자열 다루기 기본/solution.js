function solution(s) {
  const isLengthFourOrSix = s.length === 4 || s.length === 6;
  let isOnlyNumber = true;

  s.split("").forEach((spell) => {
    if (Number.isNaN(+spell)) {
      isOnlyNumber = false;
    }
  });

  return isOnlyNumber && isLengthFourOrSix;
}
