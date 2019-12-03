//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if (num <= 0) {throw new Error('Classification is only possible for natural numbers.');}
  let sum =  0, out = '';
  for (let i = 1; i <= Math.round(num / 2); i++) {
    if (num % i === 0 && num !== i) {sum += i;}
  }
  if (sum === num) {out = 'perfect';}
  else if (sum < num) {out = 'deficient';}
  else if (sum > num) {out = 'abundant';}
  return out;
};
