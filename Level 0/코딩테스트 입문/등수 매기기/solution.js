function solution(scores) {
  const avgScores = scores.map(([english, math]) => (english + math) / 2);
  const sortedAvgScores = [...avgScores].sort((a, b) => b - a);
  return avgScores.map((score) => sortedAvgScores.indexOf(score) + 1);
}
