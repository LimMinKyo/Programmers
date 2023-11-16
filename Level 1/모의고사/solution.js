function solution(answers) {
  const scores = {
    1: 0,
    2: 0,
    3: 0,
  };

  const mathHateMan1Pick = [1, 2, 3, 4, 5];
  const mathHateMan2Pick = [2, 1, 2, 3, 2, 4, 2, 5];
  const mathHateMan3Pick = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, index) => {
    if (mathHateMan1Pick[index % mathHateMan1Pick.length] === answer) {
      scores[1]++;
    }
    if (mathHateMan2Pick[index % mathHateMan2Pick.length] === answer) {
      scores[2]++;
    }
    if (mathHateMan3Pick[index % mathHateMan3Pick.length] === answer) {
      scores[3]++;
    }
  });

  const highScore = Math.max(...Object.values(scores));

  return Object.entries(scores)
    .filter(([man, score]) => score === highScore)
    .map(([man]) => +man)
    .sort((a, b) => a - b);
}
