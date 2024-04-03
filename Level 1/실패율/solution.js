function solution(N, stages) {
  const challengers = new Array(N + 2).fill(0);

  stages.forEach((stage) => {
    challengers[stage]++;
  });

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (!challengers[i]) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challengers[i] / total;
    total -= challengers[i];
  }

  return Object.entries(fails)
    .sort((a, b) => b[1] - a[1])
    .map(([stage]) => +stage);
}
