//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (firstDay, lastDay) => {
  let dayArr = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
  let giftArray = ['a Partridge in a Pear Tree', 'two Turtle Doves', 'three French Hens', 'four Calling Birds', 'five Gold Rings', 'six Geese-a-Laying', 'seven Swans-a-Swimming', 'eight Maids-a-Milking', 'nine Ladies Dancing', 'ten Lords-a-Leaping', 'eleven Pipers Piping', 'twelve Drummers Drumming'];
  if (lastDay === undefined) {
    let dayOfXmas = `On the ${dayArr[firstDay - 1]} day of Christmas my true love gave to me: `;
    let verse = '';
    for (let i = firstDay - 1; i >= 0; i--) {
      verse += (i !== 0) ? giftArray[i] + ', ' : giftArray[i] + '.\n';
      if (i === 1) {verse += 'and ';}
    }
    return dayOfXmas + verse;
  }
  else {
    let song = '';
    for (let j = firstDay - 1; j < lastDay; j++) {
      let dayOfXmas = `On the ${dayArr[j]} day of Christmas my true love gave to me: `, verse = '';
      for (let i = j; i >= 0; i--) {
        verse += (i !== 0) ? giftArray[i] + ', ' : giftArray[i] + '.\n';
        if (i === 1) {verse += 'and ';}
      }
      song += (dayOfXmas + verse);
      if (j !== lastDay - 1) {song += '\n';}
    }
    return song
  }
};
