import { encode } from "punycode";

//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
  static rotate(word, ciph) {
    let rePunc = /[,./?;:"'!]/, reNum = /\d/, encoded = ''; // use regex to match punctuation and nums to not be changed
    for (let i = 0; i < word.length; i++) {
      if (rePunc.test(word[i]) === true || reNum.test(word[i]) === true || word[i] === ' ') {encoded += (word[i]);} // keep non letters as they are
      else {
        let x = word.charCodeAt(i);
        let newNum = x + ciph; // add the cipher value to the unicode value to get encoded char
        if (x >= 65 && x <= 90) { // check the unicode decimal values for UPPERCASE LETTERS
          if (newNum > 90) {newNum -= 26;} // if over the upper bound, resets to the start of the alphabet
          encoded += (String.fromCharCode(newNum));
        }
        else if (x >= 97 && x <= 122) { // check the unicode decimal values for lowercase letters
          if (newNum > 122) {newNum -= 26;} // if over the upper bound, reset to the start of the alphabet
          encoded += (String.fromCharCode(newNum));
        }
      }    
    }
    return encoded;
  }
}