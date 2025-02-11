// Iterative approach:

function fibs(num) {
  if (num <= 0) return;

  const fibSeq = [];

  for (let i = 0; i < num; i++) {
    i < 2 ? fibSeq.push(i) : fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
  }
  return fibSeq;
}

// Recursive approach:

function fibsRec(num) {
  if (num <= 0) return;
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const fibSeq = fibsRec(num - 1);

  fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);

  return fibSeq.slice(0, num);
}
