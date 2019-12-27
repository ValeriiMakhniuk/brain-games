import { cons } from '@hexlet/pairs';
import fireGame from '..';
import createRandomNum from '../share/createRandomNum';

const description = 'What number is missing in the progression?';

const generateProgression = (step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(step + step * i);
  }
  return progression;
};

const getQuestion = (step, length, hiddenMemberIndex) => {
  const progression = generateProgression(step, length);
  progression[hiddenMemberIndex] = '..';
  return progression;
};

const getGameData = () => {
  const length = 10;
  const step = createRandomNum(1, 10);
  const hiddenMemberIndex = createRandomNum(0, length - 1);
  const question = getQuestion(step, length, hiddenMemberIndex).join(' ');
  const correctAnswer = step + step * hiddenMemberIndex;
  return cons(question, correctAnswer.toString());
};

export default () => fireGame(getGameData, description);
