function solution(bridge_length, weight, truck_weights) {
  let seconds = 0;
  let queue = [];

  while (queue.length > 0 || truck_weights.length > 0) {
    seconds++;
    queue = queue.map((truck) => ({
      ...truck,
      remainingSeconds: truck.remainingSeconds - 1,
    }));

    if (queue[0]?.remainingSeconds === 0) {
      queue.shift();
    }

    const isCanTruckOnBridge =
      queue.reduce((acc, { weight }) => acc + weight, 0) + truck_weights[0] <=
      weight;

    if (isCanTruckOnBridge) {
      const truckWeight = truck_weights.shift();
      queue.push({ weight: truckWeight, remainingSeconds: bridge_length });
      continue;
    }

    if (queue[0]?.remainingSeconds > 1) {
      const firstTruckRemainingSeconds = queue[0].remainingSeconds - 1;
      seconds += firstTruckRemainingSeconds;
      queue = queue.map((truck) => ({
        ...truck,
        remainingSeconds: truck.remainingSeconds - firstTruckRemainingSeconds,
      }));
    }
  }

  return seconds;
}
