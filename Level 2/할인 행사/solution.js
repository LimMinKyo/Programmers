function solution(wants, numbers, discounts) {
  let answer = 0;
  const TOTAL_NUMBERS = 10;
  const wantsMap = {};
  wants.forEach((want, index) => {
    wantsMap[want] = numbers[index];
  });

  for (let i = 0; i + TOTAL_NUMBERS <= discounts.length; i++) {
    const discountTarget = discounts.slice(i, i + TOTAL_NUMBERS);
    const copyWantsMap = { ...wantsMap };

    discountTarget.forEach((discount) => {
      if (copyWantsMap[discount]) {
        copyWantsMap[discount]--;
      }
    });

    const isCanBuyAll =
      Object.values(copyWantsMap).reduce((acc, cur) => acc + cur, 0) === 0;

    if (isCanBuyAll) {
      answer++;
    }
  }

  return answer;
}
