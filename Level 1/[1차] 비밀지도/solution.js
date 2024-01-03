function solution(n, arr1, arr2) {
  const answer = Array.from({ length: n }, () => Array(n).fill(" "));

  arr1 = arr1.map((num) => num.toString(2).padStart(n, "0"));
  arr2 = arr2.map((num) => num.toString(2).padStart(n, "0"));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        answer[i][j] = "#";
      }
    }
  }

  return answer.map((row) => row.join(""));
}
