const generateMagicSquare = (n = 4) => {
  let last = n * n;
  let a = [];

  for (let m = 0; m < n; m++) a[m] = [];

  let i = 0;
  let j = Math.floor(n / 2);

  for (let c = 1; c <= last; c++) {
    if (i < 0) i = n - -i;
    if (i >= n) i = i - n;
    if (j < 0) j = n - -j;
    if (j >= n) j = j - n;

    a[i][j] = c;

    if (c % n === 0) {
      i++;
    } else {
      i--;
      j++;
    }
  }
  return a;
};

module.exports = generateMagicSquare;
