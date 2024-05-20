function solution(num_list) {
  let answer = 0;

  num_list.forEach((num) => {
    while (num !== 1) {
      if (num % 2) {
        num = (num - 1) / 2;
      } else {
        num /= 2;
      }

      answer++;
    }
  });

  return answer;
}
