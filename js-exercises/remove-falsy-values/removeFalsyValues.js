function removeFalsyValues(array) {
  if (!Array.isArray(array)) {
    throw new Error('Invalid arguement supplied, the removeFalsyValues function expects arguement to be an array.');
  }

  /* this method below is the shortest way to do it,but linter will not allow me to push
  through this because we are not using element here.

  return array.filter((elements, index) => array[index]); */

  const truthyValuesArr = [];

  for (const element of array) {
    if (element) {
      truthyValuesArr.push(element);
    }
  }

  return truthyValuesArr;
}

export { removeFalsyValues };
