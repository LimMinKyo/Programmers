function solution(picture, k) {
  const answer = [];

  picture.forEach((row) => {
    row = [...row].reduce((acc, pixel) => acc + pixel.repeat(k), "");

    for (let i = 0; i < k; i++) {
      answer.push(row);
    }
  });

  return answer;
}
