// 作業3－判斷質數
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

function isPrime(input) {
  const factor = [];
  for (unit = 1; unit <= input; unit += 1) {
    if (input % unit === 0) {
      factor.push(unit);
    }
  }
  return factor.length === 2;
}

// eslint-disable-next-line
function solve(lines) {
  for (i = 1; i <= lines[0]; i += 1) {
    const N = lines[i];
    if (isPrime(N) === true) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
