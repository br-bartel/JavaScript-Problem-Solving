//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const secondsInYear = 31557600;
  let yearsOld = 0;
  const calcAge = function (yearPlanet) {
    // takes the result of unit conversion and outputs to 2 decimal places.
    // needs the parseFloat since toFixed() returns a string
    return parseFloat(((seconds / secondsInYear) / yearPlanet).toFixed(2));
  }
  if (planet === 'earth') {yearsOld = calcAge(1.0);}
  else if (planet === 'mercury') {yearsOld = calcAge(0.2408467);}
  else if (planet === 'venus') {yearsOld = calcAge(0.61519726);}
  else if (planet === 'mars') {yearsOld = calcAge(1.8808158);}
  else if (planet === 'jupiter') {yearsOld = calcAge(11.862615);}
  else if (planet === 'saturn') {yearsOld = calcAge(29.447498);}
  else if (planet === 'uranus') {yearsOld = calcAge(84.016846 );}
  else if (planet === 'neptune') {yearsOld = calcAge(164.79132 );}
  else {throw new Error('Error 404: Planet not found.');}
  return yearsOld;
};