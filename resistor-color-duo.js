//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const value = ([x, y]) => {
  let output = (COLORS.indexOf(x) * 10) + COLORS.indexOf(y); // sum the bands together (first band mult by 10 to get first digit)
  return output;
};