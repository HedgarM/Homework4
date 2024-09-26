let allInputs = '';
let inputs = [];
let stopTyped = false;

while (!stopTyped) {

  let currentInput = prompt("Please enter words, type stop to finish");
  let spacedWords = currentInput.split(' ');

  spacedWords.forEach(word => {

    let wordsComma = word.split(',');

    wordsComma.forEach(wordsComma => {

      if (wordsComma.length > 0) {
        if (stopTyped || 'stop' === wordsComma.toLowerCase()) {

          stopTyped = true;
          allInputs += ', ' + wordsComma;

        }
        else {
          inputs.push(wordsComma);
          if (allInputs === '') {
            allInputs = wordsComma;
          }
          else {
            allInputs += ', ' + wordsComma;
          }
        }
      }
    })
 });
}

if(inputs.length === 0)
{

  console.log("Input: Stop");
  console.log("Output: No input provided");

}
else
{

  console.log(`Input: ${allInputs}`);
  console.log(`Output:`);
  inputs.forEach(value =>
  {

console.log(value);

  }
  )

}