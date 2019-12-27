import { cons } from '@hexlet/pairs';
import fireGame from '..';
import createRandomNum from '../share/createRandomNum';

const getResultOfOperation = (op1, op2, operator) => {
  switch (operator) {
    case '+':
      return op1 + op2;
    case '-':
      return op1 - op2;
    case '*':
      return op1 * op2;
    default:
      return null;
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
  const firstOperand = createRandomNum(0, 100);
  const secondOperand = createRandomNum(0, 100);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = getResultOfOperation(firstOperand, secondOperand, operator);
  return cons(question, correctAnswer.toString());
};

export default () => fireGame(getGameData, description);
