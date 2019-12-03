//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(max) {
    this.max = max;
  }
  get sumOfSquares() {
    var holder = 0;
    for (let i = 1; i <= this.max; i++) {
      holder += (i * i);
    }
    return holder;
  }

  get squareOfSum() {
    var holder = 0;
    for (let i = 1; i <= this.max; i++) {
      holder += i;
    }
    return (holder * holder);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
