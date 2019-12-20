import { cons, car, cdr } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const description = 'Find the greatest common divisor of given numbers.';

const getLeftOperand = (pair) => car(pair);
const getRightOperand = (pair) => cdr(pair);

const gcd = (pair) => {
  function nod(x, y) {
    if (y === 0) return Math.abs(x);
    return nod(y, x % y);
  }
  const left = getLeftOperand(pair);
  const right = getRightOperand(pair);
  return nod(left, right);
};

const operandsToString = (pair) => `${getLeftOperand(pair)} ${getRightOperand(pair)}`;

const getGameData = () => {
  const operands = cons(createRandomNum(1, 50), createRandomNum(1, 50));
  const question = operandsToString(operands);
  const correctAnswer = gcd(operands);
  return cons(question, correctAnswer.toString());
};

export default () => fireGame(getGameData, description);
