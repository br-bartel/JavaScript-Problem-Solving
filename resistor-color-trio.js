//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// given resistor bands x, y, z:
// x is first digit in resistance value
// y is second digit
// z is number of zeros following the first 2 (same as xy*10^indexOf(z))
// for xy and xy*10^1, unit is ohms, for xy*10^2 to xy*10^4 unit is kiloohms, etc

export class ResistorColorTrio {
  constructor([x, y, z]) {
    this.x = x;
    this.y = y; 
    this.z = z;
  }

  label() {
    const c = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    if (c.indexOf(this.x) === -1 || c.indexOf(this.y) === -1 || c.indexOf(this.z) === -1) {throw new Error(/invalid color/);}
    let output = ((c.indexOf(this.x) * 10) + c.indexOf(this.y));
    if (c.indexOf(this.z) === 1 || c.indexOf(this.z) === 4) {output *= 10;} // handles 100 ohm / 100 kiloohm
    else if (c.indexOf(this.z) === 2) {output /= 10;}
    let units = '';
    if (c.indexOf(this.z) > 1) {units = 'kiloohms';} // if the multiplier is bigger than 10^1, sets to kiloohm, could be expanded for other prefixes
    else {units = 'ohms';}    
    return `Resistor value: ${output} ${units}`;
  }
}