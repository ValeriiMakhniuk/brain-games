import { cons, car, cdr } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const make = (op1, op2) => cons(op1, op2);
const getLeftOperand = (pair) => car(pair);
const getRightOperand = (pair) => cdr(pair);

const getResultOfOperation = (pair, operator) => {
  switch (operator) {
    case '+':
      return getLeftOperand(pair) + getRightOperand(pair);
    case '-':
      return getLeftOperand(pair) - getRightOperand(pair);
    case '*':
      return getLeftOperand(pair) * getRightOperand(pair);
    default:
      return 'Something went wrong, try again';
  }
};

const getRandomOperator = (operators) => {
  const randomIndex = createRandomNum(0, operators.length - 1);
  return operators[randomIndex];
};

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getGameData = () => {
  const operator = getRandomOperator(operators);
  const operands = make(createRandomNum(0, 100), createRandomNum(0, 100));
  const question = `${getLeftOperand(operands)} ${operator} ${getRightOperand(operands)}`;
  const correctAnswer = getResultOfOperation(operands, operator);
  return cons(question, correctAnswer.toString());
};

export default () => fireGame(getGameData, description);
