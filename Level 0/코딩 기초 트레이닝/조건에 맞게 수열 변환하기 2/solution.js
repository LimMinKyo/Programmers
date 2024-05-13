function solution(arr) {
  let answer = 0;
  let before = [];

  while (JSON.stringify(before) !== JSON.stringify(arr)) {
    before = [...arr];

    arr = arr.map((num) => {
      if (num >= 50 && !(num % 2)) return num / 2;
      if (num < 50 && num % 2) return num * 2 + 1;
      return num;
    });

    answer++;
  }

  return answer - 1;
}
