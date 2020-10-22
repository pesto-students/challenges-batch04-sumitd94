const limitFunctionCallCount = (cbFunction, invokeCnt) => {
  let functionInvokeCnt = 0;
  return function (...arguements) {
    if (functionInvokeCnt === invokeCnt) {
      return null;
    }
    functionInvokeCnt += 1;
    return cbFunction(...arguements);
  };
};

export { limitFunctionCallCount };
