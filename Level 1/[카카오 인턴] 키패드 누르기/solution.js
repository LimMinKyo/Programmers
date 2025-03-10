function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [1, 0],
    3: [2, 0],
    4: [0, 1],
    5: [1, 1],
    6: [2, 1],
    7: [0, 2],
    8: [1, 2],
    9: [2, 2],
    "*": [0, 3],
    0: [1, 3],
    "#": [2, 3],
  };

  let left = "*";
  let right = "#";

  return numbers
    .map((num) => {
      if ([1, 4, 7].includes(num)) {
        left = num;
        return "L";
      }

      if ([3, 6, 9].includes(num)) {
        right = num;
        return "R";
      }

      const leftDistance =
        Math.abs(keypad[num][0] - keypad[left][0]) +
        Math.abs(keypad[num][1] - keypad[left][1]);
      const rightDistance =
        Math.abs(keypad[num][0] - keypad[right][0]) +
        Math.abs(keypad[num][1] - keypad[right][1]);

      if (leftDistance === rightDistance) {
        if (hand === "right") {
          right = num;
          return "R";
        } else {
          left = num;
          return "L";
        }
      }

      if (leftDistance < rightDistance) {
        left = num;
        return "L";
      } else {
        right = num;
        return "R";
      }
    })
    .join("");
}
