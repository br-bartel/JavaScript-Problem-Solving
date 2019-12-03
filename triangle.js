//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this._sOne = sideOne;
    this._sTwo = sideTwo;
    this._sThr = sideThree;
  }

  kind() {
    if (this._sOne <= 0 || this._sTwo <= 0 || this._sThr <= 0 || this._sOne + this._sTwo < this._sThr || this._sTwo + this._sThr < this._sOne || this._sThr + this._sOne < this._sTwo) {
     throw new Error(); // all error conditions: any side zero or less, and any 2 sides being smaller than the third
    }
    if (this._sOne === this._sTwo && this._sTwo === this._sThr) {return 'equilateral';}
    else if (this._sOne === this._sTwo || this._sOne === this._sThr || this._sTwo === this._sThr) {return 'isosceles';}
    else {return 'scalene';}
  }
}