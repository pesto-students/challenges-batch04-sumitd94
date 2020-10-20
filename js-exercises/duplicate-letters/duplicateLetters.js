function duplicateLetters(...args) {
  const strArr = Array.from(args[0]);
  const sortArr = strArr.sort();

  let cnt = 1;
  const charCntArr = [];

  for (let i = 0; i < sortArr.length; i += 1) {
    if (i !== sortArr.length - 1) {
      if (sortArr[i] === sortArr[i + 1]) {
        cnt += 1;
      } else {
        charCntArr.push(cnt);
        cnt = 1;
      }
    } else {
      /* eslint-disable */
      if (sortArr[i] === sortArr[i - 1]) {
        charCntArr.push(cnt);
      } else {
        charCntArr.push(1);
      }
      /* eslint-enable */
    }
  }

  const maxCharCnt = charCntArr.sort((a, b) => b - a)[0];
  return maxCharCnt === 1 ? false : maxCharCnt;
}

export { duplicateLetters };
