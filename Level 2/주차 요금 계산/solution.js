function solution(fees, records) {
  const carInMap = new Map();
  const carTimeMap = new Map();
  const carFeeMap = new Map();

  records.forEach((record) => {
    const [time, carNumber, inOutType] = record.split(" ");

    if (inOutType == "IN") {
      carInMap.set(carNumber, timeToMinutes(time));
    } else {
      const inTime = carInMap.get(carNumber);
      const outTime = timeToMinutes(time);
      const diffTime = outTime - inTime;

      carTimeMap.set(carNumber, (carTimeMap.get(carNumber) || 0) + diffTime);
      carInMap.delete(carNumber);
    }
  });

  [...carInMap.entries()].forEach(([carNumber, inTime]) => {
    const outTime = timeToMinutes("23:59");
    const diffTime = outTime - inTime;

    carTimeMap.set(carNumber, (carTimeMap.get(carNumber) || 0) + diffTime);
  });

  [...carTimeMap.entries()].forEach(([carNumber, diffTime]) => {
    carFeeMap.set(carNumber, calculateFee(diffTime, fees));
  });

  return [...carFeeMap.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([_, fee]) => fee);
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":");
  return Number(hours) * 60 + Number(minutes);
}

function calculateFee(diffTime, fees) {
  const [defaultMinutes, defaultFee, unitMinutes, unitFee] = fees;

  return diffTime <= defaultMinutes
    ? defaultFee
    : defaultFee +
        Math.ceil((diffTime - defaultMinutes) / unitMinutes) * unitFee;
}
