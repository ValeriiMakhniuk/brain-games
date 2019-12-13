import { createRandomNum, askUser } from '../../share';
import { operandsToString, makeOperation, getResultOfOperation } from '../../libs/arithmetic';

export default (name) => {
  const operation = makeOperation(createRandomNum(51), createRandomNum(51), 'nod');
  const answer = askUser(`Question: ${operandsToString(operation)} `);
  const correctAnswer = getResultOfOperation(operation);
  console.log(`Your answer: ${answer}`);
  if (parseInt(answer, 10) === parseInt(correctAnswer, 10)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}`);
  return false;
};
