import { askUser, createRandomNum } from '../../share';

const checkNumEven = (num) => num % 2 === 0;

export default (name) => {
  const number = createRandomNum(101);
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
