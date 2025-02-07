function solution(babbling) {
  let answer = 0;

  babbling.forEach((babblingWord) => {
    ["aya", "ye", "woo", "ma"].forEach((canSpeakWord) => {
      if (!babblingWord.includes(canSpeakWord.repeat(2))) {
        babblingWord = babblingWord.replaceAll(canSpeakWord, " ");
      }
    });

    if (!babblingWord.replaceAll(" ", "")) {
      answer++;
    }
  });

  return answer;
}
