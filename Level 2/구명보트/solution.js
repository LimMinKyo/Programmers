function solution(people, limit) {
  let answer = 0;
  people = people.sort((a, b) => b - a);

  let leftPersonIndex = 0;
  let rightPersonIndex = people.length - 1;

  while (leftPersonIndex <= rightPersonIndex) {
    const sumWeight = people[leftPersonIndex] + people[rightPersonIndex];
    if (sumWeight > limit) {
      leftPersonIndex++;
    } else {
      leftPersonIndex++;
      rightPersonIndex--;
    }
    answer++;
  }

  return answer;
}
