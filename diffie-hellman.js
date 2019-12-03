//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(pPrime, gPrime) {
    // Tests if p and g are within bounds, then checks if they are primes.
    // Only need to test up to /2 since next factor will be 1
    if (pPrime < 1 || pPrime > 1000 || gPrime < 1 || gPrime > 1000) {throw new Error('Prime must be within bounds');}
    for (let i = 2; i <= Math.round(pPrime / 2); i++){
      if (pPrime % i === 0) {throw new Error('Number must be a prime');}
      else {continue;}
    }
    for (let i = 2; i <= Math.round(gPrime / 2); i++) {
      if (gPrime % i === 0) {throw new Error('Number must be a prime');}
      else {continue;}
    }
    this._p = pPrime;
    this._g = gPrime;
  }
  
  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this._p) {throw new Error('Number must be within bounds');}
    return ((this._g ** privateKey) % this._p);
  }

  getSharedSecret(privateKey, publicKey) {
    return (publicKey ** privateKey) % this._p;
  }
}
