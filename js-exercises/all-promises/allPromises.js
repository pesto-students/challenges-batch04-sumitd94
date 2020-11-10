function allPromises(promisesArr) {
  const result = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promisesArr.forEach((promise) => {
      Promise.resolve(promise)
        .then((item) => {
          counter += 1;
          result.push(item);

          if (counter === promisesArr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

export { allPromises };
