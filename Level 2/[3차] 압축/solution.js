function solution(msg) {
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const dict = {};

  alphabet.forEach((char, index) => (dict[char] = index + 1));

  const answer = [];

  while (true) {
    const keys = Object.keys(dict);

    if (keys.includes(msg)) {
      answer.push(dict[msg]);
      break;
    }

    for (let i = 1; i <= keys.length + 1; i++) {
      if (!keys.includes(msg.slice(0, i))) {
        answer.push(dict[msg.slice(0, i - 1)]);
        dict[msg.slice(0, i)] = keys.length + 1;
        msg = msg.slice(i - 1);
        break;
      }
    }
  }

  return answer;
}
