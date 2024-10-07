function solution(s) {
  s = s
    .slice(2, -2)
    .split("},{")
    .map((numbers) => numbers.split(",").map(Number))
    .sort((a, b) => a.length - b.length);

  const answer = [];

  s.forEach((numbers) => {
    numbers.forEach((number) => {
      if (!answer.includes(number)) {
        answer.push(number);
      }
    });
  });

  return answer;
}
