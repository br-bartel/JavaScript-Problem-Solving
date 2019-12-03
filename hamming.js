//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (leftStrand, rightStrand) => {
  let ham = 0;
  if (leftStrand.length === 0 && rightStrand.length > 0) { // if only left strand is empty, throw this
    throw new Error("left strand must not be empty");
  }
  else if (rightStrand.length === 0 && leftStrand.length > 0) { // if only right strand is empty, throw this
    throw new Error("right strand must not be empty");
  }
  else if (leftStrand.length !== rightStrand.length) { 
    throw new Error("left and right strands must be of equal length")
  }
  else {
    for (let i = 0; i < leftStrand.length; i++) {
      if (leftStrand[i] !== rightStrand[i]) {
        ham++;
      }
    }
  }
  return ham;
};
