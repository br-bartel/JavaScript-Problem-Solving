//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word) => {
  let rev = "";
  for (let i = word.length - 1; i >= 0; i--) {
    rev = rev.concat(word[i]);
  }
  return rev;
};
