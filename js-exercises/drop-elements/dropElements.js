function dropElements(elements, predicate) {
  const filteredArr = [];
  elements.map((element) => {
    if (predicate(element)) {
      filteredArr.push(element);
    }
    return filteredArr;
  });
  return filteredArr;
}

export { dropElements };
