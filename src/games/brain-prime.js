import { cons } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const number = createRandomNum(0, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

export default () => fireGame(primeGame, description);
