function solution(polynomial) {
  let xNum = 0;
  let num = 0;

  polynomial.split(" + ").forEach((n) => {
    if (n.includes("x")) {
      xNum += +n.replaceAll("x", "") || 1;
    } else {
      num += +n;
    }
  });

  const answer = [];

  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
