function chunkArrayInGroups(arr, chunkSize) {
  const chunkedArrays = [];
  if (chunkSize >= arr.length) {
    return arr;
  }

  let recievedArrayLength = arr.length;
  let startIndex = 0;
  let endIndex = chunkSize;
  while (chunkSize <= recievedArrayLength) {
    chunkedArrays.push(arr.slice(startIndex, endIndex));
    startIndex = endIndex;
    endIndex += chunkSize;
    recievedArrayLength -= chunkSize;
  }

  if (recievedArrayLength < chunkSize && recievedArrayLength !== 0) {
    chunkedArrays.push(arr.slice(startIndex, endIndex));
  }

  return chunkedArrays;
}

export { chunkArrayInGroups };
