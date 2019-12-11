#!/usr/bin/env node
import askUser from '..';

console.log('Welcome to the Brain Games!');
const userName = askUser('Whats your name?');
console.log(`Hello ${userName}`);
