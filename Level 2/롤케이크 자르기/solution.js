function solution(toppings) {
  let answer = 0;

  const rightToppingMap = new Map();
  const leftToppingSet = new Set();

  toppings.forEach((topping) => {
    rightToppingMap.set(topping, (rightToppingMap.get(topping) || 0) + 1);
  });

  toppings.forEach((topping) => {
    leftToppingSet.add(topping);
    rightToppingMap.set(topping, rightToppingMap.get(topping) - 1);

    if (rightToppingMap.get(topping) === 0) {
      rightToppingMap.delete(topping);
    }

    if (leftToppingSet.size === rightToppingMap.size) {
      answer++;
    }
  });

  return answer;
}
