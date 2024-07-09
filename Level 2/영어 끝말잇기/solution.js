function solution(n, words) {
  const usedWords = new Set();
  let startChar = words[0][0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (usedWords.has(word) || word[0] !== startChar) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    usedWords.add(word);
    startChar = word.at(-1);
  }

  return [0, 0];
}
