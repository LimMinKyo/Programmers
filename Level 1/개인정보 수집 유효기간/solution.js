function solution(today, terms, privacies) {
  const answer = [];

  const termMap = new Map();

  terms.forEach((term) => {
    const [type, month] = term.split(" ");
    termMap.set(type, +month);
  });

  privacies.forEach((privacy, index) => {
    const [date, type] = privacy.split(" ");
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + termMap.get(type));

    if (newDate <= new Date(today)) {
      answer.push(index + 1);
    }
  });

  return answer;
}
