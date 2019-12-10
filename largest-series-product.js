//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (number, chain) => {
  let regex = /\D/g, resArr = [];
  if (regex.test(number) === true || chain < 0) {throw new Error('Invalid input.');} // uses regular expression to see if any non-digits exist
  if (number.length < chain && chain !== 0) {throw new Error('Slice size is too big.');}
  if (chain === 0) {return 1;}
  for (let i = 0; i < (number.length - chain + 1); i++) { // length - chain + 1 gives the ending index for the chain
    let holder = 1;
    for (let j = i; j < (i + chain); j++) {holder *= parseInt(number[j], 10);}
    resArr.push(holder); // hold the results of all the tests in an array
  }
  return Math.max(...resArr); // return the maximum value of the tests stored in the array
};
