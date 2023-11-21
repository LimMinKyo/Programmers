const dfs = (current, length, result) => {
  const vowels = [..."AEIOU"];

  if (length === current.length) {
    result.push(current);
    return;
  }

  vowels.forEach((vowel) => {
    dfs(current + vowel, length, result);
  });
};

function solution(word) {
  const result = [];

  for (let i = 1; i <= 5; i++) {
    dfs("", i, result);
  }

  return result.sort().indexOf(word) + 1;
}
