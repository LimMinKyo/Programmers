function solution(s) {
  let countTransform = 0;
  let countZero = 0;

  while (s !== "1") {
    countTransform++;
    countZero += s.split("").filter((num) => num === "0").length;
    s = s.replaceAll("0", "").length.toString(2);
  }

  return [countTransform, countZero];
}
