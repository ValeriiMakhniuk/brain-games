import { cons } from '@hexlet/pairs';
import fireGame from '..';
import createRandomNum from '../share/createRandomNum';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (y === 0) return Math.abs(x);
  return gcd(y, x % y);
};

const getGameData = () => {
  const firstOperand = createRandomNum(1, 50);
  const secondOperand = createRandomNum(1, 50);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = gcd(firstOperand, secondOperand);
  return cons(question, correctAnswer.toString());
};

export default () => fireGame(getGameData, description);
