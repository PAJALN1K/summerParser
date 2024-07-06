export const compareNumbers = (a, b) => {
  if (a === null && b === null) {
    return 0;
  } else if (a === null) {
    return b;
  } else if (b === null) {
    return a;
  } else {
    return a - b;
  }
};
