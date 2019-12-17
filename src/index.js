import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const fireGame = (game, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}`);

  for (let i = 0; i < 3; i += 1) {
    const data = game();
    const question = car(data);
    const correctAnswer = cdr(data);
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}`);
      return 1;
    }
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};

export default fireGame;
