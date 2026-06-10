define(function () {
  function calculate(expression) {
    return eval(expression);
  }

  return {
    calculate,
  };
});