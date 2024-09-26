// Write code for a function

// TODO:  your code here
function roundTo2Digits(value, digits) {
  if(!digits){
      digits = 2;
  }
  value = value * Math.pow(10, digits);
  value = Math.round(value);
  value = value / Math.pow(10, digits);
  return value;
}

function fahrenheitToCelsius (fer,cel)
{

  let result = Number(Math.round((fer - 32) * 5/9)).toFixed(2);
  roundTo2Digits(result,2)
  return result

}

// Test your function.
// Note the following:
//   Input: Fahrenheit temperature
//   Return: Fahrenheit temperature converted to Celsius
//
// Various users may use the function and display the output in 
//   different formats.  Therefore, the function returns the result and
//   does not display it on the console.

// Create input and output variables and test
let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212} Celsius`);

// Test with 32 degrees Fahrenheit (No variables)
console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32)} degrees Celsius`);

// Create a variable and test
let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7)} degrees Celsius`);
