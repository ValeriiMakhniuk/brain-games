import { askUser, createRandomNum } from '../../share';
import { makeOperation, operationToString, getResultOfOperation } from '../../libs/arithmetic';

const getRandomOperator = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = createRandomNum(operations.length);
  return operations[randomIndex];
};

export default (name) => {
  const operator = getRandomOperator();
  const operation = makeOperation(createRandomNum(101), createRandomNum(51), operator);
  const answer = askUser(`Question: ${operationToString(operation)} `);
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
