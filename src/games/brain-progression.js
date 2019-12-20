import { cons, car, cdr } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const description = 'What number is missing in the progression?';

const generateProgressionData = (length, step, randomIndex) => {
  const progression = [];
  let answer;

  let j = step;
  for (let i = 0; i < length; i += 1) {
    if (i === randomIndex) {
      progression.push('..');
      answer = j;
    } else {
      progression.push(j);
    }
    j += step;
  }
  return cons(progression.join(' '), answer.toString());
};

const getGameData = () => {
  const length = createRandomNum(3, 10);
  const step = createRandomNum(1, 10);
  const randomIndex = createRandomNum(0, length - 1);
  const progressionData = generateProgressionData(length, step, randomIndex);
  const progression = car(progressionData);
  const correctAnswer = cdr(progressionData);
  return cons(progression, correctAnswer);
};

export default () => fireGame(getGameData, description);
