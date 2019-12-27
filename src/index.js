import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const timesToPlay = 3;

const fireGame = (getGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  for (let i = 0; i < timesToPlay; i += 1) {
    const data = getGameData();
    const question = car(data);
    const correctAnswer = cdr(data);
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}`);
  return true;
};

export default fireGame;
