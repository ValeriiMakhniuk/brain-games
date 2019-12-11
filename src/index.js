#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askUser = (question) => readlineSync.question(`${question} `);
export default askUser;
