const deepCopyObject = (objToCopy) => {
  if (!objToCopy) {
    return objToCopy;
  }

  if (typeof objToCopy === 'object') {
    return Object.fromEntries(
      Object.entries(objToCopy).map(([key, value]) => [key, deepCopyObject(value)]),
    );
  }

  return objToCopy;
};

export { deepCopyObject };
