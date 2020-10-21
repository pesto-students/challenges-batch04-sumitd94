// You can use the function from the `Math` module.

function sqrt(number) {
  return typeof number === 'number' ? Math.sqrt(number) : null;
}

function power(number, powerOf) {
  return typeof number === 'number' && typeof powerOf === 'number'
    ? number ** powerOf
    : null;
}

function round(floatNumber) {
  return typeof floatNumber === 'number' ? Math.round(floatNumber) : null;
}

// Don't change the exported names.
export { sqrt, power, round };
