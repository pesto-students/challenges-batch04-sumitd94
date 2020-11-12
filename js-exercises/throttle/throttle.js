function throttle(fn, timeInMs) {
  let timer;

  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, timeInMs);
  };
}

export { throttle };
