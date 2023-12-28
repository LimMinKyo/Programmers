function solution(msg) {
  const dict = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const answer = [];

  const chars = [...msg];
  let nextWord = "";
  let index = 0;

  while (chars.length > index) {
    const currentWord = nextWord;
    nextWord += chars[index];

    if (dict.indexOf(nextWord) >= 0) {
      index++;
    } else {
      const wordIndex = dict.indexOf(currentWord) + 1;
      answer.push(wordIndex);
      dict.push(nextWord);
      nextWord = "";
    }

    if (chars.length === index) {
      const wordIndex = dict.indexOf(nextWord) + 1;
      answer.push(wordIndex);
    }
  }

  return answer;
}
