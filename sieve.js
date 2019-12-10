//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (maxVal) => {
  let sieveArr = new Array(maxVal + 1).fill(true), output = []; // add 1 to account for 0 index
  for (let i = 2; i <= Math.sqrt(maxVal); i++) {
    if (sieveArr[i]) {
      for (let j = i**2; j <= maxVal; j += i){ // if the value is prime, mark all multiples as false
        sieveArr[j] = false;
      }      
    }
  }
  for (let k = 2; k <= maxVal; k++) {
    if (sieveArr[k]) {output.push(k)} // pushes the true values to an output array 
  }
  return output;
}