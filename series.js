//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(num) {
    this.num = num;
  }

  get digits() {
    let numArr = [];
    for (let char of this.num) {numArr.push(parseInt(char));}
    return numArr;
  }

  slices(seriesLength) {
    let dLength = this.digits.length, dArr = this.digits; // create new local variables for getter
    if (seriesLength > dLength) {throw new Error("Slice size is too big.");}
    let list = [], over = false; // initialize new array that will store other lists
    for (let i = 0; i < dLength; i++) {
      let tempList = []; // will hold the sequences
      for (let k = 0; k < seriesLength; k++) {
        if ((i + k) === dLength) {over = true; break;} // if starting position + current position in series is > array, break both loops
        tempList.push(dArr[i + k]); // i + k is the current position on the array (starting  + current positions)
      }
      if (over === true) {break;}
      list.push(tempList); // add the sequence to the local array
    }
    return list;
  }
}