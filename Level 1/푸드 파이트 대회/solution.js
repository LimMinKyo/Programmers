function solution(foods) {
  const foodOrder = foods
    .slice(1)
    .map((food, index) => String(index + 1).repeat(~~(food / 2)))
    .join("");
  const foodOrderReverse = [...foodOrder].reverse().join("");

  return foodOrder + "0" + foodOrderReverse;
}
