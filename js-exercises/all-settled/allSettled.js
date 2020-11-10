const allSettled = (promisesArr) => {
  const result = [];
  let counter = 0;

  return new Promise(resolve => {
    promisesArr.forEach((promise) => {
      Promise.resolve(promise)
        .then((response) => {
          counter += 1;
          result.push({ status: 'fulfilled', value: response });

          if (counter === promisesArr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          counter += 1;
          result.push({ status: 'rejected', value: err });

          if (counter === promisesArr.length) {
            resolve(result);
          }
        });
    });
  });
};

export { allSettled };
