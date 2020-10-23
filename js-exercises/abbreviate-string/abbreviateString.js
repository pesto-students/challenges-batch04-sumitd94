import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) {
    throw new Error('Invalid arguement received, the arguement should be of type string.');
  }
  const wordsArray = str.split(' ');
  const lastWordsArrKey = wordsArray.length - 1;
  const lastWordCharacterArr = Array.from(wordsArray[lastWordsArrKey]);

  return `${wordsArray[0]} ${lastWordCharacterArr[0].toUpperCase()}.`;
}

export { abbreviateString };
