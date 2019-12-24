import { cons } from '@hexlet/pairs';
import fireGame from '..';
import createRandomNum from '../share/createRandomNum';

const description = 'What number is missing in the progression?';

const generateProgression = (start, end) => {
  const progression = [];
  for (let i = 0; i < end; i += 1) {
    progression.push(start + start * i);
  }
  return progression;
};

const getProgressionToAsk = (length, step, randomIndex) => {
  const progression = generateProgression(step, length);
  progression[randomIndex] = '..';
  return progression;
};

const getGameData = () => {
  const length = createRandomNum(3, 10);
  const step = createRandomNum(1, 10);
  const randomIndex = createRandomNum(0, length - 1);
  const progression = getProgressionToAsk(length, step, randomIndex);
  const question = progression.join(' ');
  const correctAnswer = step + step * randomIndex;
  return cons(question, correctAnswer.toString());
};

export default () => fireGame(getGameData, description);
