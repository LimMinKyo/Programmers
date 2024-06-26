function solution(orders, courses) {
  const answer = [];

  courses.forEach((course) => {
    const menus = [];
    let counts = {};

    orders.forEach((order) => {
      const combinations = getCombinations(order.split(""), course).map(
        (combination) => combination.sort().join("")
      );
      menus.push(...combinations);
    });

    menus.forEach((menu) => {
      counts[menu] = counts[menu] ? counts[menu] + 1 : 1;
    });

    const max = Math.max(...Object.values(counts));

    Object.entries(counts).forEach(([menu, count]) => {
      if (count > 1 && count === max) {
        answer.push(menu);
      }
    });
  });

  return answer.sort();
}

function getCombinations(arr, num) {
  if (num === 1) return arr.map((value) => [value]);

  const result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
    const combine = combinations.map((combination) => [fixed, ...combination]);
    result.push(...combine);
  });

  return result;
}
