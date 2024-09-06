function solution(n, info) {
  let maxDiff = 0;
  let maxCombination;

  combinationsWithRepetition([...Array(11).keys()], n).forEach(
    (combination) => {
      const { lionScore, apeachScore } = calculateScore(combination, info);
      const diff = lionScore - apeachScore;
      if (diff > maxDiff) {
        maxDiff = diff;
        maxCombination = combination;
      }
    }
  );

  if (maxDiff <= 0) {
    return [-1];
  } else {
    const answer = new Array(11).fill(0);
    const scoreCount = maxCombination.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    Object.entries(scoreCount).forEach(([score, count]) => {
      answer[10 - score] = count;
    });
    return answer;
  }
}

function calculateScore(combination, info) {
  let lionScore = 0;
  let apeachScore = 0;

  for (let i = 1; i <= 10; i++) {
    const lionScoreCount = combination.filter((score) => score === i).length;
    if (info[10 - i] < lionScoreCount) {
      lionScore += i;
    } else if (info[10 - i] > 0) {
      apeachScore += i;
    }
  }

  return { lionScore, apeachScore };
}

function combinationsWithRepetition(arr, n) {
  if (n === 1) return arr.map((value) => [value]);

  const result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index);
    const combinations = combinationsWithRepetition(rest, n - 1);
    const combine = combinations.map((combination) => [fixed, ...combination]);
    result.push(...combine);
  });

  return result;
}
