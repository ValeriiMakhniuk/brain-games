import { cons } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const checkNumEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const number = createRandomNum(0, 100);
  const correctAnswer = checkNumEven(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

export default () => fireGame(evenGame, description);
