#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askUserForName = () => readlineSync.question('May I have your name? ');
const greeting = (name) => {
  console.log(`Hello ${name}`);
};
export const fullGreeting = () => {
  const name = askUserForName();
  greeting(name);
  return name;
};

const checkNumEven = (num) => num % 2 === 0;
const createRandomNum = () => Math.floor(Math.random() * 100);
const askUserForNumber = (number) => readlineSync.question(`Question: ${number} `);

export const evenGame = (name) => {
  const number = createRandomNum();
  const answer = askUserForNumber(number);
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

export const fireGame = (game, times) => {
  console.log('Welcome to the Brain Games!');
  if (game === evenGame) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  const name = fullGreeting();
  let result;
  for (let i = 0; i < times; i += 1) {
    if (!game(name)) {
      result = false;
      break;
    }
    result = true;
  }
  if (result) {
    console.log(`Congratulations, ${name}`);
  }
};
