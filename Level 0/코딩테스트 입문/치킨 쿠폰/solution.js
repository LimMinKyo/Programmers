function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    const serviceChickens = Math.floor(coupon / 10);
    answer += serviceChickens;
    coupon = (coupon % 10) + serviceChickens;
  }

  return answer;
}
