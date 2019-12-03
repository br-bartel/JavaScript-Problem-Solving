//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (inNum) => {
  let isOne = false, count = 0;
  if (inNum === 1) {return count = 0;}
  else if (inNum < 1) {throw new Error('Only positive numbers are allowed');}
  else {
  do {
      inNum = (inNum % 2 === 0) ? inNum / 2 : 3 * inNum + 1; // divide by 2 if even, 3n + 1 if odd
      count++;
      if (inNum === 1) {isOne = true;} // loops until the value reaches 1
    } while (!isOne);
  }
  return count;
}