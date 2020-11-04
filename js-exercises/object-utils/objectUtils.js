// your implementation

const map = (obj, callbackFN) => Object.fromEntries(
  Object.entries(obj).map(([key, values]) => callbackFN([key, values])),
);

const filter = (obj, callbackFN) => Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => callbackFN([key, value])),
);

const invert = (obj) => {
  for (const keys in obj) {
    if (!keys || typeof keys === 'object') return false;
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key]),
  );
};

const merge = (...objects) => {
  let mergedObj = {};
  objects.forEach((singleObj) => {
    mergedObj = { ...mergedObj, ...singleObj };
  });
  return mergedObj;
};

const all = (obj, callbackFN) => Object.entries(obj).every(callbackFN);
const some = (obj, callbackFN) => Object.entries(obj).some(callbackFN);

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
