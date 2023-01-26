export const lengths = (x) => {
  let arr = 0;
  while (x[arr] !== undefined) arr++;
  return arr;
};

export const findIndex = (a, x) => {
  let count = 0;

  for (a of x) {
    if (a !== lengths(x)) {
      count += 1;
    }

    count = a[count];
    return a;
  }
};
