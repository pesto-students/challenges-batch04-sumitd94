function flipArgs(getReverseStringFn) {
  return function reverseCharacters(...characters) {
    const flippedCharacters = [];

    for (let i = characters.length - 1; i >= 0; i -= 1) {
      flippedCharacters.push(characters[i]);
    }

    return getReverseStringFn(...flippedCharacters);
  };
}

export { flipArgs };
