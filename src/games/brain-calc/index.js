import { askUser, createRandomNum } from '../../share';

import {
  operationToString,
  makeOperandsPair,
  sum,
  sub,
  mult,
} from '../../libs/arithmetic';

const createOperation = () => {
  const operations = [sum, sub, mult];
  const randomIndex = createRandomNum(operations.length);
  return operations[randomIndex];
};

export default (name) => {
  const operands = makeOperandsPair(createRandomNum(101), createRandomNum(11));
  const operation = createOperation();
  const answer = askUser(`Question: ${operationToString(operands, operation)} `);
  const correctAnswer = operation(operands);
  console.log(`Your answer: ${answer}`);
  if (parseInt(answer, 10) === parseInt(correctAnswer, 10)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}`);
  return false;
};
