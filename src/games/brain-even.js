import { cons } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = createRandomNum(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => fireGame(getGameData, description);
