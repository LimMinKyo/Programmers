function solution(priorities, location) {
  priorities = priorities.map((priority, index) => ({
    target: location === index,
    priority,
  }));

  let count = 0;

  while (priorities.length !== 0) {
    const shiftedPriority = priorities.shift();
    const isExistHigherPriority = priorities.some(
      (priority) => priority.priority > shiftedPriority.priority
    );

    if (isExistHigherPriority) {
      priorities.push(shiftedPriority);
      continue;
    }

    count++;

    if (shiftedPriority.target) {
      return count;
    }
  }
}
