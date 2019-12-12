import { cons, car, cdr } from '../pairs';

// Constructor for arithmetic operation with 2 operands
export const makeOperandsPair = (op1, op2) => cons(op1, op2);

// Selectors
export const getLeftOperand = (pair) => car(pair);
export const getRightOperand = (pair) => cdr(pair);

// Methods
export const sum = (pair) => getLeftOperand(pair) + getRightOperand(pair);
export const sub = (pair) => getLeftOperand(pair) - getRightOperand(pair);
export const mult = (pair) => getLeftOperand(pair) * getRightOperand(pair);
export const operationToString = (pair, operation) => {
  const left = getLeftOperand(pair);
  const right = getRightOperand(pair);
  if (operation === sum) {
    return `${left} + ${right}`;
  }
  if (operation === sub) {
    return `${left} - ${right}`;
  }
  if (operation === mult) {
    return `${left} * ${right}`;
  }
  return 'Something went wrong, try again';
};
