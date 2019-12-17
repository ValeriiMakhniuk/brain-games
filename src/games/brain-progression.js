import { cons, car, cdr } from '@hexlet/pairs';
import fireGame from '../index';
import { createRandomNum } from '../share';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const step = createRandomNum(1, 10);
  const randomIndex = createRandomNum(0, 9);
  const progression = [];
  let answer;

  let j = step;
  for (let i = 0; i < 10; i += 1) {
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

const progressionGame = () => {
  const progressionPair = generateProgression();
  const progression = car(progressionPair);
  const correctAnswer = cdr(progressionPair);
  return cons(progression, correctAnswer);
};

export default () => fireGame(progressionGame, description);
