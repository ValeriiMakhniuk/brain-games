import { cons } from '@hexlet/pairs';
import fireGame from '..';
import createRandomNum from '../share/createRandomNum';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const question = createRandomNum(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => fireGame(getGameData, description);
