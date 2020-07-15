// 作業1－印出星星
/* eslint linebreak-style: 0 */
/* eslint no-unused-vars: 0 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', line => lines.push(line));

function printStar(number) {
  let star = '';
  let i = 0;
  while (i < number) {
    i += 1;
    star += '*';
    console.log(star);
  }
}

// eslint-disable-next-line
rl.on('close', () => solve(lines));
