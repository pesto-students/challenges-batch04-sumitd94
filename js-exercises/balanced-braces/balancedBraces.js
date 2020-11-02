function checkValidBracesPair(openingBrace, closingBrace) {
  return (
    (openingBrace === '(' && closingBrace === ')')
    || (openingBrace === '{' && closingBrace === '}')
    || (openingBrace === '[' && closingBrace === ']')
  );
}

function balancedBraces(characters) {
  if (typeof characters !== 'string') {
    throw new Error('balancedBraces expects its argument to be of type string');
  }

  const bracesArray = [];
  const openingBracesArray = ['(', '{', '['];
  const closingBracesArray = [')', '}', ']'];
  for (const char of characters) {
    if (openingBracesArray.includes(char)) {
      bracesArray.push(char);
    }

    if (closingBracesArray.includes(char)) {
      if (!checkValidBracesPair(bracesArray.pop(), char)) {
        return false;
      }
    }
  }

  if (bracesArray.length) {
    return false;
  }

  return true;
}

export { balancedBraces };
