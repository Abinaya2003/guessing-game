let guessBox = document.getElementById("number-input");
let check = document.getElementById("guess");
let history = document.getElementById("history");
const randomNumber = Math.floor(Math.random()*100+1);
let count = 0;
let finalResult = false;
history.innerHTML = "";

function GuessingGame() {
    if (finalResult === false) {
        computeWinner();
        viewHistory();
        return finalResult;
    }
}   

function viewHistory() {
    let manualGuess = guessBox.value;
    history.innerHTML +=  "You Guessed " + manualGuess;

}

function computeWinner() {
    let result = document.getElementById("result");
    let guess = guessBox.value;

    if (count < 5) {
        if (randomNumber == guess) {
            result.innerHTML = "<h1>You Won🕺💃!</h1>";
            finalResult = true;
        } else if (randomNumber < guess) {
            result.innerHTML = "<h1>You Too High🤷!</h1>";
            finalResult = false;
        } else {
            result.innerHTML = "<h1>You Too Low🙇!</h1>";
            finalResult = false;
        }
        count ++;
    } else {
        if (randomNumber == guess) {
            result.innerHTML = "<h1>You Won🕺💃!</h1>";
            finalResult = true;
        }
        else {
            result.innerHTML = "<h1>You Lose🙆!</h1>";
            finalResult = true;
        }
    }
}



check.addEventListener("click", GuessingGame);
