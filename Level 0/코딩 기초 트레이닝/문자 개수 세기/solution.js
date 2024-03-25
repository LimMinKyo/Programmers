function solution(my_string) {
  const answer = new Array(52).fill(0);

  [...my_string].forEach((char) => {
    const charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      answer[charCode - 65]++;
    } else {
      answer[charCode - 97 + 26]++;
    }
  });

  return answer;
}
