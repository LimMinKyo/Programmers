function solution(s) {
  let convertCount = 0;
  let removeZeroCount = 0;

  while (s !== "1") {
    const removedSLength = s.split("").filter((num) => {
      if (num === "0") {
        removeZeroCount++;
        return false;
      }
      return true;
    }).length;
    s = removedSLength.toString(2);
    convertCount++;
  }

  return [convertCount, removeZeroCount];
}
