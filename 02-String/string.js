function string(value) {
  if (typeof value !== "string")   throw new Error("Function works only for strings");
  if(value.trim() === "")   throw new Error('Enter some string!');
  
  
  return value.trim().split("").reverse().join("").replace(/\s+/g, " ");
}

module.exports = {string}