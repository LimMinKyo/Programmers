function solution(arr) {
  const answer = [0, 0];

  quadtree(0, 0, arr.length, arr, answer);

  return answer;
}

function quadtree(x, y, n, arr, answer) {
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (arr[x][y] !== arr[i][j]) {
        n = Math.floor(n / 2);
        quadtree(x, y, n, arr, answer);
        quadtree(x + n, y, n, arr, answer);
        quadtree(x, y + n, n, arr, answer);
        quadtree(x + n, y + n, n, arr, answer);
        return;
      }
    }
  }

  answer[arr[x][y]]++;
}
