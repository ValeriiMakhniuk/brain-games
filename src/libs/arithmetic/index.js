import
{
  cons,
  car,
  cdr,
} from '@hexlet/pairs';

// Constructor for arithmetic operation with 2 operands
export const makeOperation = (op1, op2, operator) => cons(cons(op1, op2), operator);

// Selectors
const getLeftOperand = (pair) => car(car(pair));
const getRightOperand = (pair) => cdr(car(pair));
const getOperator = (pair) => cdr(pair);

// Methods
const sum = (pair) => getLeftOperand(pair) + getRightOperand(pair);
const sub = (pair) => getLeftOperand(pair) - getRightOperand(pair);
const mult = (pair) => getLeftOperand(pair) * getRightOperand(pair);
const gcd = (pair) => {
  function nod(x, y) {
    if (y === 0) return Math.abs(x);
    return nod(y, x % y);
  }
  const left = getLeftOperand(pair);
  const right = getRightOperand(pair);
  return nod(left, right);
};
// Share Mathods
export const operationToString = (pair) => `${getLeftOperand(pair)} ${getOperator(pair)} ${getRightOperand(pair)}`;
export const operandsToString = (pair) => `${getLeftOperand(pair)} ${getRightOperand(pair)}`;
export const getResultOfOperation = (pair) => {
  const operator = getOperator(pair);
  if (operator === '+') {
    return sum(pair);
  }
  if (operator === '-') {
    return sub(pair);
  }
  if (operator === '*') {
    return mult(pair);
  }
  if (operator === 'nod') {
    return gcd(pair);
  }
  return `${pair} is no a pair`;
};
