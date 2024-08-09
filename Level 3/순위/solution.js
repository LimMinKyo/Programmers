function solution(n, results) {
  const winners = Array.from({ length: n + 1 }, () => new Set());
  const losers = Array.from({ length: n + 1 }, () => new Set());

  results.forEach(([winner, loser]) => {
    winners[loser].add(winner);
    losers[winner].add(loser);
  });

  for (let i = 1; i <= n; i++) {
    winners[i].forEach((winner) => {
      losers[i].forEach((loser) => losers[winner].add(loser));
    });
    losers[i].forEach((loser) => {
      winners[i].forEach((winner) => winners[loser].add(winner));
    });
  }

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (winners[i].size + losers[i].size === n - 1) {
      answer++;
    }
  }

  return answer;
}
