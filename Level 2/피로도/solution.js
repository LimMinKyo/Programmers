const getPermutations = (arr, willSelectNumLength) => {
  const result = [];

  if (willSelectNumLength === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, willSelectNumLength - 1);
    const combined = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...combined);
  });

  return result;
};

function solution(k, dungeons) {
  const result = [];

  const permutations = getPermutations(dungeons, dungeons.length);

  permutations.forEach((permutation) => {
    let count = 0;
    let restFatigue = k;

    permutation.forEach(([minFatigue, fatigue]) => {
      if (restFatigue < minFatigue || restFatigue < fatigue) {
        return;
      }
      restFatigue -= fatigue;
      count++;
    });

    result.push(count);
  });

  return Math.max(...result);
}
