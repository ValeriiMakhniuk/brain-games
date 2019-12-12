import checkNumEven from './checkNumEven';
import { askUser, createRandomNum } from '../../share';

export default (name) => {
  const number = createRandomNum();
  const answer = askUser(`Question: ${number} `);
  const correctAnswer = checkNumEven(number) ? 'yes' : 'no';
  console.log(`Your answer: ${answer}`);
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}`);
  return false;
};
