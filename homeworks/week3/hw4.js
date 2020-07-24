// 作業4－判斷迴文
/* eslint linebreak-style: 0 */
/* eslint no-undef: 0 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', line => lines.push(line));

function reverse(str) {
  let answer = '';
  for (i = str.length - 1; i >= 0; i -= 1) {
    answer += str[i];
  }
  return answer;
}

// eslint-disable-next-line
function solve(lines) {
  const str = lines[0];
  if (reverse(str) === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}


rl.on('close', () => solve(lines));
