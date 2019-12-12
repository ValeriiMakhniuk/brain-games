export const cons = (x, y) => (message) => {
  switch (message) {
    case 'car':
      return x;
    case 'cdr':
      return y;
    default:
      return 0;
  }
};
export const car = (pair) => pair('car');
export const cdr = (pair) => pair('cdr');
export const isPair = (pair) => typeof pair === 'function';
