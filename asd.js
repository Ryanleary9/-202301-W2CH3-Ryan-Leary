export const findIndex = (a, b, c, index) => {
  for (a of b) {
    c++;
    if (c === index) {
      index = c;

      return c;
    }
  }
};
