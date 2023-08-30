function checkValideNumber(checkNum1, checkNum2) {
  if (
    !(checkNum1 && typeof checkNum1 === "number") ||
    !(checkNum2 && typeof checkNum2 === "number")
  )
    return NaN;
}

function add(num1, num2) {
  checkValideNumber(num1, num2);
  return num1 + num2;
}

function subtract(num1, num2) {
  checkValideNumber(num1, num2);

  return num1 - num2;
}

function divide(num1, num2) {
  checkValideNumber(num1, num2);
  if (num2 === 0) return NaN;
  return num1 / num2;
}

function multiply(num1 , num2) {
  checkValideNumber(num1, num2);
  return num1 * num2;
}

module.exports = { add, subtract, divide, multiply };
