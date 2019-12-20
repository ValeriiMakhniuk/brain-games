import { cons } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const number = createRandomNum(0, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

export default () => fireGame(getGameData, description);
