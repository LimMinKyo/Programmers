function solution(board, moves) {
  const lanes = Array.from({ length: board[0].length }, () => []);

  [...board.reverse()].forEach((row) => {
    row.forEach((doll, index) => {
      if (doll) {
        lanes[index].push(doll);
      }
    });
  });

  const bucket = [];
  let answer = 0;

  moves.forEach((move) => {
    const doll = lanes[move - 1].pop();

    if (!doll) {
      return;
    }

    if (bucket.at(-1) === doll) {
      bucket.pop();
      answer += 2;
    } else {
      bucket.push(doll);
    }
  });

  return answer;
}
