const sumEvenArgs = (...args) => {
  let sum = 0;

  for (const number of args) {
    if (number % 2 === 0) {
      sum += number;
    }
  }

  return sum;
};

export { sumEvenArgs };
