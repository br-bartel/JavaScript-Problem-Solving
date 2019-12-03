//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  let isIso = true;
  word = word.toLowerCase();
  let spaceRegEx = /\s/g, hyphenRegEx = /-/g; // create regex for spaces and hyphens, to be removed from string
  word = word.replace(spaceRegEx, ``);
  word = word.replace(hyphenRegEx, ``);
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {isIso = false; break;} // break out of loop if a letter matches
    }
    if (isIso === false) {break;}
  }
  return isIso;
};
