function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  const diff = Math.abs(rows - cols);

  if (rows > cols) {
    arr.forEach((_, i) => {
      for (let j = 0; j < diff; j++) {
        arr[i].push(0);
      }
    });
  } else if (rows < cols) {
    for (let i = 0; i < diff; i++) {
      arr.push(Array(cols).fill(0));
    }
  }

  return arr;
}
