import { askUser } from './share';
import { evenGame } from './games';

const fireGame = (game, times) => {
  console.log('Welcome to the Brain Games!');

  if (game === evenGame) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }

  const name = askUser('May I have your name?');

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
