let randomNum = Math.floor(Math.random() * 100) + 1;
let userAttempts = 0;

function guessNum() {
    let userGuess = prompt("Guess a number between 1 and 100:");
    userAttempts++;

    if (userGuess < randomNum) {
        alert("Too low, guess again");
        guessNum();
    } else if (userGuess > randomNum) {
        alert("Too high, guess again");
        guessNum();
    } else {
        alert(`Correct! It took you ${userAttempts} attempts to guess the correct number.`);
    }
}

guessNum();