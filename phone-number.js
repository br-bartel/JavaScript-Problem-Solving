//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class PhoneNumber {
  constructor(pNum) {
    this.pNum = pNum;
  }

  number() {
    let testRegex = /[A-Za-z!@#$%^&*?:;]/, nonNumRegex = /\D/g; // create regex for alpha / punctuation and for all non numbers
    let hasAlpha = testRegex.test(this.pNum); // returns a bool for if the input has alpha / punctuation characters
    if (hasAlpha === true) {return null;}
    this.pNum = this.pNum.replace(nonNumRegex, ``); // removes all non-numbers from the string
    if (this.pNum.length === 11 && this.pNum.charAt(0) === `1`) {this.pNum = this.pNum.slice(1)} // for edge case with a leading 1 (country code)
    if (this.pNum.length !== 10) {return null;} // after trimming above, any string longer than 10 digits returns null
    if (this.pNum[0] < `2` || this.pNum[3] < `2`) {return null;} // since utf-8 values for 0 and 1 are "less" than utf-8 for 2, this works
    return this.pNum;
  }
}