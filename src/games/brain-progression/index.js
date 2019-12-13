import { createRandomNum, askUser } from '../../share';

const generateProgression = () => {
  const step = createRandomNum(1, 10);
  const progression = [];

  let j = step;
  for (let i = 0; i < 10; i += 1) {
    progression.push(j);
    j += step;
  }
  return progression;
};

const replace = (progression, index) => {
  const replaced = progression;
  replaced[index] = '..';
  return replaced;
}

export default (name) => {
  const progression = generateProgression();
  const randomIndex = createRandomNum(0, progression.length - 1);
  const correctAnswer = progression[randomIndex];
  const progressionToAsk = replace(progression, randomIndex);
  const answer = askUser(`${progressionToAsk.join(' ')}`);
  console.log(`Your answer: ${answer}`);
  if (parseInt(answer, 10) === parseInt(correctAnswer, 10)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}`);
  return false;
};
