function calc (num1,num2)
{
  let answer = num1 + num2
  console.log(`${num1} + ${num2} = ${answer}`)
}

function isInteger(value) {
  return !isNaN(value) && Number.isInteger(Number(value));
}

let num1 = Number(prompt("Enter a number"))
let num2 = Number(prompt("Enter another number"))

if (isInteger(num1) && isInteger(num2)) {
  calc(num1,num2);
} else {
  console.log("Invalid input. Please enter an integer.");
}