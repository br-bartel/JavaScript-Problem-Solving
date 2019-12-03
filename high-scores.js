//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(score) {
    this.score = score;
  }

  get scores() {
    return this.score;
  }

  get latest() {
    return this.score[this.score.length - 1]; // last value stored is the latest
  }

  get personalBest() {
    let x = 0;
    for (let num of this.score) {x = (num > x ? num : x);} // get the max value from the array
    return x;
  }

  get personalTopThree() {
    let out = [];
    let xArr = this.score.sort(function(a, b){return b - a}); // do a descending sort function
    for (let i = 0; i < 3; i++) {
      if (xArr[i] !== undefined) {out.push(xArr[i]);} // if there is a value, push it to a new array
      else {break;}
    }
    return out;
  }
}
