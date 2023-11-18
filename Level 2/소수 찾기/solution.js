const getIsPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= ~~Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getPermutations = (numbers, willSelectNumLength) => {
  const result = [];

  if (willSelectNumLength === 1) {
    return numbers.map((num) => [num]);
  }

  numbers.forEach((fixed, index, origin) => {
    const restNumbers = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(restNumbers, willSelectNumLength - 1);
    const combined = permutations.map((permutation) => [fixed, ...permutation]);

    result.push(...combined);
  });

  return result;
};

function solution(numbers) {
  const set = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const permutations = getPermutations([...numbers], i);
    const primeNumbers = permutations
      .map((permutation) => +permutation.join(""))
      .filter((num) => getIsPrime(num));

    primeNumbers.forEach((num) => set.add(num));
  }

  return set.size;
}
