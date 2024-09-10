function solution(n, weak, dist) {
  const weakLength = weak.length;
  for (let i = 0; i < weakLength; i++) {
    weak.push(weak[i] + n);
  }

  let answer = dist.length + 1;

  for (let i = 0; i < weakLength; i++) {
    for (const friends of getPermutations(dist, dist.length)) {
      let count = 1;
      let position = weak[i] + friends[count - 1];
      for (let j = i; j < i + weakLength; j++) {
        if (position < weak[j]) {
          count++;
          if (count > dist.length) {
            break;
          }
          position = weak[j] + friends[count - 1];
        }
      }
      answer = Math.min(answer, count);
    }
  }

  return answer <= dist.length ? answer : -1;
}

function getPermutations(arr, n) {
  if (n === 0) {
    return [[]];
  }

  const result = [];

  arr.forEach((fixed, index) => {
    const rest = [...arr];
    rest.splice(index, 1);
    const permutations = getPermutations(rest, n - 1);
    const combine = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...combine);
  });

  return result;
}
