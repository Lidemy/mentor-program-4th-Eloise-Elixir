// 作業5－聯誼順序比大小
/* eslint linebreak-style: 0 */
/* eslint no-undef: 0 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(que) {
  for (let i = 1; i < que.length; i += 1) {
    const input = que[i].split(' ');
    const a = BigInt(input[0]);
    const b = BigInt(input[1]);
    if (a === b) {
      console.log('DRAW');
    }
    if (Number(input[2]) === 1) {
      if (a > b) {
        console.log('A');
      } else if (a < b) {
        console.log('B');
      }
    }
    if (Number(input[2]) === -1) {
      if (a > b) {
        console.log('B');
      } else if (a < b) {
        console.log('A');
      }
    }
  }
}


rl.on('close', () => {
  solve(lines);
});
