function solution(s) {
  const str = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") pCount++;
    if (str[i] === "y") yCount++;
  }

  return pCount === yCount ? true : false;
}
