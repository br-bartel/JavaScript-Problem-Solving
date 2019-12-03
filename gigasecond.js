//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  return new Date(date.getTime() + (1E9 * 1000)); // convert gigasecond to ms, add to input converted to ms, convert sum to new date
};
