function solution(surveys, choices) {
  const n = surveys.length;
  const choiceMap = {};

  surveys.forEach((survey) => {
    choiceMap[survey[0]] = 0;
    choiceMap[survey[1]] = 0;
  });

  for (let i = 0; i < n; i++) {
    const survey = surveys[i];
    const choice = choices[i];

    if (choice < 4) {
      choiceMap[survey[0]] = choiceMap[survey[0]] + Math.abs(choice - 4);
    } else if (choice > 4) {
      choiceMap[survey[1]] = choiceMap[survey[1]] + Math.abs(choice - 4);
    }
  }

  return ["RT", "CF", "JM", "AN"]
    .map((personality) =>
      choiceMap[personality[0]] > choiceMap[personality[1]]
        ? personality[0]
        : choiceMap[personality[0]] < choiceMap[personality[1]]
        ? personality[1]
        : [...personality].sort()[0]
    )
    .join("");
}
