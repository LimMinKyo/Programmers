function solution(dartResult) {
  const bonusMap = { S: 1, D: 2, T: 3 };
  const optionMap = { "*": 2, "#": -1, undefined: 1 };

  const darts = dartResult.match(/(\d+[SDT][*#]?)/g).map((dart) => {
    const [_, score, bonus, option] = dart.match(/(^\d{1,})(S|D|T)(\*|#)?/);
    return [score, bonus, option];
  });

  const scores = [];

  darts.forEach(([score, bonus, option], index) => {
    if (option === "*" && index > 0) {
      scores[index - 1] *= 2;
    }

    scores.push(score ** bonusMap[bonus] * optionMap[option]);
  });

  return scores.reduce((acc, cur) => acc + cur, 0);
}
