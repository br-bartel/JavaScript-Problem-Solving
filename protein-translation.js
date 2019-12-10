//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (strand = '') => {
  let proteins = [];
  if (strand.length === 0) {return proteins;}
  // can only repeat length/3 times, so let that be the limit for the loop
  // each codon will be from i*3 + (i+1)*3 (i.e 0 => 3, 3 => 6, 6 => 9...)
  for (let i = 0; i < strand.length/3; i++) {
    let codon = strand.slice(i * 3, (i + 1) * 3); // split the strand into the 3 char codon for eval
    if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA') {break;} //stop codon
    else if (codon === 'AUG') {proteins.push('Methionine');}
    else if (codon === 'UUU' || codon === 'UUC') {proteins.push('Phenylalanine');}
    else if (codon === 'UUA' || codon === 'UUG') {proteins.push('Leucine');}
    else if (codon === 'UCU' || codon === 'UCC' || codon === 'UCA' || codon === 'UCG') {proteins.push('Serine');}
    else if (codon === 'UAU' || codon === 'UAC') {proteins.push('Tyrosine');}
    else if (codon === 'UGU' || codon === 'UGC') {proteins.push('Cysteine');}
    else if (codon === 'UGG') {proteins.push('Tryptophan');}
    else {throw new Error('Invalid codon');}
  }
  return proteins;
};
