function curry(functionRef) {
  if (typeof functionRef !== 'function') {
    throw new Error('curry function expects arguement passed to be of type function');
  }
  return function curried(...args) {
    if (args.length >= functionRef.length) {
      return functionRef.apply(this, args);
    }

    return (...args2) => curried.apply(this, [...args, ...args2]);
  };
}

export { curry };
