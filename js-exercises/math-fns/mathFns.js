// You can't use the function from the `Math` module.

function sqrt(number) {
  let sqrtNumber = 1;

  while (number / sqrtNumber !== sqrtNumber) {
    sqrtNumber += 1;
  }

  return sqrtNumber;
}

function power(number, powerOf) {
  let powerOfResult = 1;
  for (let i = 1; i <= powerOf; i += 1) {
    powerOfResult *= number;
  }

  return powerOfResult;
}

function round(floatNumber) {
  const decimalValue = (floatNumber % 1) * 10;

  /* eslint-disable */
  let integerValue = parseInt(floatNumber);
  /* eslint-enable */

  if (decimalValue >= 5) {
    integerValue += 1;
  }

  return integerValue;
}

// Don't change the exported names.
export { sqrt, power, round };
