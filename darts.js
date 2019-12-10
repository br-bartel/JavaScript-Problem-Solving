//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.

// Equation of a circle: x^2 + y^2 = r^2
// Equation to get radius (how far from center it is): sqrt(x^2 + y^2) = r
const radius = function (x,y) {
  return Math.sqrt(x**2 + y**2); 
}

export const solve = (a,b) => {
  if (radius(a,b) > 10) {return 0;}
  else if (radius(a,b) <= 10 && radius(a,b) > 5) {return 1;}
  else if (radius(a,b) <= 5 && radius(a,b) > 1) {return 5;}
  else if (radius(a,b) <= 1) {return 10;}
};
