function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const zeroCount = lottos.filter((num) => num === 0).length;
  const minCount = lottos.filter((num) => win_nums.includes(num)).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
