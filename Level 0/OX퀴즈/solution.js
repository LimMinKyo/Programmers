function solution(quizzes) {
  return quizzes.map((quiz) => {
    const [left, right] = quiz.split(" = ");
    const leftResult = new Function(`return ${left}`)();
    return leftResult === +right ? "O" : "X";
  });
}
