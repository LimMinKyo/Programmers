function solution(enrolls, referrals, sellers, amounts) {
  const parent = getParent(enrolls, referrals);

  const total = getInitialTotal(enrolls);

  sellers.forEach((seller, index) => {
    let money = amounts[index] * 100;

    while (money > 0 && seller !== "-") {
      const distributionMoney = Math.floor(money / 10);
      total[seller] += money - distributionMoney;
      seller = parent[seller];
      money = distributionMoney;
    }
  });

  return enrolls.map((enroll) => total[enroll]);
}

function getParent(enrolls, referrals) {
  const parent = {};

  enrolls.forEach((enroll, index) => {
    parent[enroll] = referrals[index];
  });

  return parent;
}

function getInitialTotal(enrolls) {
  const total = {};

  enrolls.forEach((enroll) => {
    total[enroll] = 0;
  });

  return total;
}
