// You can change the `args`
function bind(callbackFn, obj) {
  if (typeof callbackFn !== 'function' || typeof obj !== 'object') {
    throw new Error('Bind method expects arguements 1 to be a function and arguement 2 to be a object');
  }
  return (args) => callbackFn.call(obj, args);
}

module.exports = { bind };
