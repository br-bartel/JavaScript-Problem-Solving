//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let pling = 'Pling', plang = 'Plang', plong = 'Plong', out = '';
  if (number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
    if(number % 3 === 0) {
      out += pling;
    }
    if (number % 5 === 0) {
      out += plang;
    }
    if (number % 7 === 0) {
      out += plong;
    }
  }
  else {
    out = number.toString();
  }
  return out;
};