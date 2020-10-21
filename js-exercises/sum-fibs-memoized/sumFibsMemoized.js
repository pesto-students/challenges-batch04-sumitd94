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

/* eslint-disable */

function cacheFunction(sumFibs) {
  const memo = {};
  return (value) => {
    if (!memo.hasOwnProperty(value)) {
      memo[value] = sumFibs(value);
    }
    return memo[value];
  };
}
/* eslint-enable */

export { sumFibs, cacheFunction };
