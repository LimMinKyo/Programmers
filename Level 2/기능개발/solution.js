function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length !== 0) {
    const progressedProgresses = progresses.map(
      (progress, index) => progress + speeds[index]
    );
    let completedFeature = 0;

    while (progressedProgresses[0] >= 100) {
      progressedProgresses.shift();
      speeds.shift();
      completedFeature++;
    }

    progresses = progressedProgresses;

    if (completedFeature > 0) {
      answer.push(completedFeature);
    }
  }

  return answer;
}
