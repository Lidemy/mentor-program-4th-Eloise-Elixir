// 作業2－找出水仙花數
/* eslint linebreak-style: 0 */
/* eslint no-undef: 0 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// eslint-disable-next-line
rl.on('line', function (line) {
  lines.push(line);
});

// eslint-disable-next-line
function isNarci(input) {
  const splited = input.toString().split('');
  const count = splited.length;
  let answer = 0;
  for (number = 0; number < count; number += 1) {
    answer += Number(splited[number]) ** count;
  }
  if (answer === input) {
    return input;
  }
}

// eslint-disable-next-line
function solve(lines) {
  const que = lines[0].split(' ');
  const N = Number(que[0]);
  const M = Number(que[1]);
  for (i = N; i <= M; i += 1) {
    if (isNarci(i)) {
      console.log(i);
    }
  }
}

// eslint-disable-next-line
rl.on('close', function () {
  solve(lines);
});
