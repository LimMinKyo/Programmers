function solution(n, words) {
  const passWords = [];

  for (let index = 0; index < words.length; index++) {
    if (index === 0) {
      passWords.push(words[index]);
      continue;
    }

    if (passWords.includes(words[index])) {
      return [(index % n) + 1, Math.floor(index / n) + 1];
    }

    if (passWords[passWords.length - 1].slice(-1) !== words[index][0]) {
      return [(index % n) + 1, Math.floor(index / n) + 1];
    }

    passWords.push(words[index]);
  }

  return [0, 0];
}
