function solution(orders) {
  return orders.reduce(
    (acc, order) => acc + (order.includes("cafelatte") ? 5000 : 4500),
    0
  );
}
