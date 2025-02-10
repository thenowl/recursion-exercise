function fibs(num) {
  const fibNums = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      fibNums.push(0);
      continue;
    }
    if (i === 1) {
      fibNums.push(1);
      continue;
    }
    fibNums.push(fibNums[i - 2] + fibNums[i - 1]);
  }
  return fibNums;
}

// fibs(8);

function fibsRec(num) {}
