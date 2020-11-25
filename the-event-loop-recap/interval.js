/* eslint-disable no-console */
let count = 3;

function countdown() {
  if (count !== 0) {
    console.log(count);
    count -= 1;
  } else {
    console.log('Blast off!');
    clearInterval(tMinus);
  }
}

const tMinus = setInterval(countdown, 1000);
