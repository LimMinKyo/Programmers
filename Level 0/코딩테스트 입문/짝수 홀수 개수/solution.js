function solution(num_list) {
  let oddNumber = 0;
  let evenNumber = 0;

  num_list.forEach((num) => {
    if (num % 2 === 0) {
      evenNumber++;
      return;
    }

    oddNumber++;
  });

  return [evenNumber, oddNumber];
}
