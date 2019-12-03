//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (num) => {
  /*To get to each digit, convert input to a string value and evaluate for each index */
  let isArmstrong = false, result = 0, str = num.toString(), digits = str.length;
  for (let i = 0; i < digits; i++) {
    let thisDigit = parseInt(str[i]);
    result += thisDigit ** digits;
  }
  isArmstrong = result === num ? true : false; // checks if the number is an Armstrong Number
  return isArmstrong;
};