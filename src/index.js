import { askUserName } from './share';
import
{
  evenGame,
  calcGame,
  gcdGame,
  progressionGame,
  primeGame,
} from './games';

const fireGame = (game, times) => {
  console.log('Welcome to the Brain Games!');

  if (game === evenGame) console.log('Answer "yes" if the number is even, otherwise answer "no".');
  if (game === calcGame) console.log('What is the result of the expression?');
  if (game === gcdGame) console.log('Find the greatest common divisor of given numbers.');
  if (game === progressionGame) console.log('What number is missing in the progression?');
  if (game === primeGame) console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const name = askUserName('May I have your name?');

  console.log(`Hello ${name}`);

  let won = false;
  for (let i = 0; i < times; i += 1) {
    if (!game(name)) {
      won = false;
      break;
    }
    won = true;
  }
  if (won) {
    console.log(`Congratulations, ${name}`);
  }
};

export default fireGame;
