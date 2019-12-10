//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(str) {
    let aCount = 0, cCount = 0, gCount = 0, tCount = 0;
    for (let char of str) { // goes over each character in strand and tests which (if any) nucleotide matches
      if (char === 'A') {aCount++;}
      else if (char === 'C') {cCount++;}
      else if (char === 'G') {gCount++;}
      else if (char === 'T') {tCount++;}
      else {throw new Error('Invalid nucleotide in strand');}
    }
    return `${aCount} ${cCount} ${gCount} ${tCount}`;
  }
}
