function rangeIter(start, end) {
  if (!start && !end) {
    throw new TypeError('undefined is not a number');
  }

  if (!start || !end) {
    throw new TypeError('undefined is not a number');
  }

  if (typeof start !== 'number') {
    throw new TypeError(`${start} is not a number`);
  }

  if (typeof end !== 'number') {
    throw new TypeError(`${end} is not a number`);
  }

  if (start > end) {
    return [];
  }

  return Array.from({ length: (end - start + 1) }, (value, index) => index + start);
}

export { rangeIter };
