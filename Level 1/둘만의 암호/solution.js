function solution(s, skip, index) {
  const alphabets = [..."abcdefghijklmnopqrstuvwxyz"].filter(
    (alphabet) => !skip.includes(alphabet)
  );

  return [...s]
    .map(
      (char) => alphabets[(alphabets.indexOf(char) + index) % alphabets.length]
    )
    .join("");
}
