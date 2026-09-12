function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increamentbyone(a) {
  return a + 1;
}

function calculateDiscount(price, percentage) {
  if (price < 0 || percentage < 0 || percentage > 100) {
    throw new Error("Invalid price or discount");
  }

  return price - (price * percentage) / 100;
}

module.exports = {
  add,
  subtract,
  calculateDiscount,
  multiply,
  divide,
  increamentbyone,
};
