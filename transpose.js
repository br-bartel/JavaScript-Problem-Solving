//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (input.length === 0) {return [];}

  // gets the length of the longest string element
  const maxLength = Math.max(...(input.map(element => element.length)));
  
  // for each string element, pad with a space to the max string element length and then split to make each string an array of characters
  const padInput = input.map(elem => elem.padEnd(maxLength, ' ').split(''));
  
  // starting with the zero index, map over the outer array, then map over the inner array to return the transpose of the array
  const transposeArr = padInput[0].map((_column, columnIndex) => padInput.map((_row, rowIndex) => padInput[rowIndex][columnIndex]));

  // join each of the inner arrays to a string in the outer array
  const joinedRows = transposeArr.map(row => row.join(''));
  
  // trim whitespace from the right of the last element to handle unequal string lengths (does the same as .trimRight())
  joinedRows[joinedRows.length - 1] = joinedRows[joinedRows.length - 1].trimEnd();

  return joinedRows;
};