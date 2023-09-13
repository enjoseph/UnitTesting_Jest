const calcArea = (a, b, c) => {
    if (![a, b, c].every(item => typeof item === "number")) {
      throw new Error("Side length values must be typeof number!");
    }
  
    if (![a,b,c].every(item => item >= 0)) {
      throw new Error("Side lengths can't be negative number or zero!");
    }
  
    if (!(a + b > c) || !(b + c > a) || !(a + c > b)) {
      throw new Error("there can't be a triangle with this sides!");
    }
  
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area
  };
  
  module.exports = { calcArea };