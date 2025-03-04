function solution(X, Y) {
  const XMap = {};
  const YMap = {};

  X.split("").forEach((num) => {
    XMap[num] = XMap[num] ? XMap[num] + 1 : 1;
  });

  Y.split("").forEach((num) => {
    YMap[num] = YMap[num] ? YMap[num] + 1 : 1;
  });

  let answer = "";

  Object.keys(XMap).forEach((num) => {
    if (YMap[num]) {
      answer += num.repeat(Math.min(XMap[num], YMap[num]));
    }
  });

  if (!answer) {
    return "-1";
  }

  if (+answer === 0) {
    return "0";
  }

  return [...answer].sort((a, b) => b - a).join("");
}
