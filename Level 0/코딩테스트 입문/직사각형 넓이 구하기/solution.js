function solution(dots) {
  const xArr = [];
  const yArr = [];

  dots.forEach(([x, y]) => {
    xArr.push(x);
    yArr.push(y);
  });

  return (
    (Math.max(...xArr) - Math.min(...xArr)) *
    (Math.max(...yArr) - Math.min(...yArr))
  );
}
