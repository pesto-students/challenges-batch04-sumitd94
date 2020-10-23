function rot13(args) {
  const codeA = 'A'.charCodeAt();
  const codeN = 'N'.charCodeAt();
  const codeZ = 'Z'.charCodeAt();

  const decrytedTextArr = [];

  for (const char of args) {
    const charCode = char.charCodeAt();

    if (charCode >= codeN && charCode <= codeZ) {
      decrytedTextArr.push(String.fromCharCode(charCode - 13));
    } else if (charCode >= codeA && charCode < codeN) {
      decrytedTextArr.push(String.fromCharCode(charCode + 13));
    } else {
      decrytedTextArr.push(char);
    }
  }

  const decryptedString = decrytedTextArr.join('');
  return decryptedString;
}

export { rot13 };
