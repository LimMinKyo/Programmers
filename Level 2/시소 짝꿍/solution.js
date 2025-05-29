function solution(weights) {
  let answer = 0;
  const weightMap = new Map();

  weights.forEach((weight) => {
    weightMap.set(weight, (weightMap.get(weight) ?? 0) + 1);
  });

  for (let i = 100; i <= 1000; i++) {
    if (weightMap.get(i) > 0) {
      answer += (weightMap.get(i) * ((weightMap.get(i) ?? 0) - 1)) / 2;
      answer += weightMap.get(i) * (weightMap.get((i * 3) / 2) ?? 0);
      answer += weightMap.get(i) * (weightMap.get(i * 2) ?? 0);
      answer += weightMap.get(i) * (weightMap.get((i * 4) / 3) ?? 0);
    }
  }

  return answer;
}
