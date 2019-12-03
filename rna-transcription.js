//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const toRna = (strand) => { 
  let rna = ""; 
  for (let nucleotides of strand) {
    if (nucleotides === "A") {
      rna = rna.concat("U");
    }
    else if (nucleotides === "C") {
      rna = rna.concat("G");
    }
    else if (nucleotides === "G") {
      rna = rna.concat("C");
    }
    else if (nucleotides === "T") {
      rna = rna.concat("A");
    }
    else {
      rna = rna.concat("");
    }
  }
return rna;
};