function getUniqueItems(arrayToFilter, arrayToCompare) {
  const uniqueItemsArr = arrayToFilter.filter(elements => arrayToCompare.indexOf(elements) === -1);

  return uniqueItemsArr;
}

function diffArray(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Invalid arguements supplied, the diffArray function expects both arguements to be array.');
  }

  const array1UniqueValues = getUniqueItems(array1, array2);
  const array2UniqueValues = getUniqueItems(array2, array1);

  return [...array1UniqueValues, ...array2UniqueValues];
}

export { diffArray };
