function sumFibs(num) {
  if (num <= 0) return 0;

  let startNum = 0;
  let nextNum = 1;
  let currentNum;
  let sumOfOddNum = 1;
  for (let i = 0; i <= num; i += 1) {
    currentNum = startNum + nextNum;
    startNum = nextNum;
    nextNum = currentNum;
    if (currentNum % 2 !== 0 && currentNum <= num) {
      sumOfOddNum = currentNum + sumOfOddNum;
    }
  }

  return sumOfOddNum;
}

function cacheFunction(sumOfFibs) {
  const memo = {};
  return (value) => {
    /* eslint-disable */
    if (!memo.hasOwnProperty(value)) {
      memo[value] = sumOfFibs(value);
    }
    /* eslint-enable */
    return memo[value];
  };
}

export { sumFibs, cacheFunction };
