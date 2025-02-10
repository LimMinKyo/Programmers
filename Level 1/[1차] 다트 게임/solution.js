function solution(dartResult) {
  const scores = [];

  dartResult
    .split(/([0-9]+[^0-9]+)/g)
    .filter(Boolean)
    .forEach((score, index) => {
      const num = +score.replace(/\D/g, "");

      if (score.includes("S")) {
        scores.push(num);
      }

      if (score.includes("D")) {
        scores.push(num ** 2);
      }

      if (score.includes("T")) {
        scores.push(num ** 3);
      }

      if (score.includes("*")) {
        if (scores[index - 1]) {
          scores[index - 1] = scores[index - 1] * 2;
        }
        scores[index] = scores[index] * 2;
      }

      if (score.includes("#")) {
        scores[index] = scores[index] * -1;
      }
    });

  return scores.reduce((acc, cur) => acc + cur, 0);
}
