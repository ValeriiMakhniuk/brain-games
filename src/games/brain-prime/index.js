import { createRandomNum, askUser } from '../../share';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
};

export default (name) => {
  const number = createRandomNum(0, 100);
  const answer = askUser(`${number}`);
  const correctAnswer = isPrime(number);
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}`);
  return false;
};
