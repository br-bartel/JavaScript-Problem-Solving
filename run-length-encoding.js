//
// This is only a SKELETON file for the 'Run Length Encoding' edStringercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (eString) => {
  let n = eString.length, result = '';
for (let i = 0; i < n; i++) {
    let counter = 1; // will always have at least 1 letter to input
    while (i < n - 1 && eString.charAt(i) === eString.charAt(i + 1)) {
      counter++;
      i++;
    }
    if (counter === 1) {result += eString.charAt(i);}
    else {result += (counter+eString.charAt(i));}
  }
return result;
};

export const decode = (dString = '') => {
  let n = dString.length, out = '', counter = 1;
  for (let k = 0; k < n; k++) {
    if (!isNaN(dString[k]) && dString[k] !== ' ') {
      counter = Number(dString[k]);
      if (k + 1 < n && !isNaN(dString[k+1]) && dString[k+1] !== ' ') {
        counter = Number(dString[k] + dString[k+1]);
        k++;
      }
    }    
    else {
      for (let i = 0; i < counter; i++) {
        out += dString[k];
      }
      counter = 1;
    }
  }
  return out;
}