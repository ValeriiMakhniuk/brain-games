import { cons, car, cdr } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const getRandomOperator = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = createRandomNum(0, operations.length - 1);
  return operations[randomIndex];
};

const getLeftOperand = (pair) => car(car(pair));
const getRightOperand = (pair) => cdr(car(pair));

const sum = (pair) => getLeftOperand(pair) + getRightOperand(pair);
const sub = (pair) => getLeftOperand(pair) - getRightOperand(pair);
const mult = (pair) => getLeftOperand(pair) * getRightOperand(pair);

const makeOperation = (op1, op2, operator) => cons(cons(op1, op2), operator);
const getOperator = (pair) => cdr(pair);
const operationToString = (pair) => `${getLeftOperand(pair)} ${getOperator(pair)} ${getRightOperand(pair)}`;
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
  return `${pair} is no a pair`;
};

const description = 'What is the result of the expression?';

const calcGame = () => {
  const operator = getRandomOperator();
  const operation = makeOperation(createRandomNum(0, 100), createRandomNum(0, 100), operator);
  const question = operationToString(operation);
  const correctAnswer = getResultOfOperation(operation);
  return cons(question, correctAnswer.toString());
};

export default () => fireGame(calcGame, description);
