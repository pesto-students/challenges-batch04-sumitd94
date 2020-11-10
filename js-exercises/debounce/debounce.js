function debounce(fn, timeInMs) {
  let timeout;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn();
    }, timeInMs);
  };
}

export { debounce };
