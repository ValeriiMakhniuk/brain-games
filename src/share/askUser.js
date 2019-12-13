import readlineSync from 'readline-sync';

export default (question) => readlineSync.question(`Question: ${question} `);
