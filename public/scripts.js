
var guessInput = document.getElementById("guess-input");
var guessClick = document.getElementById('guess');
var resetClick = document.getElementById('clear');
var clearClick = document.getElementById('reset');

function resetBtn(btn) {
  document.getElementById(btn).disabled = true;
}

function setBtn(btn) {
  document.getElementById(btn).disabled = false;
}

function clearField() {
  resetBtn("clear");
   guessInput.value = "";
}

function resetGame() {

}
function randomNumber(){
  return Math.floor(Math.random() * 100);
}


function gameStarts() {
setBtn("reset");
number = randomNumber;

}

function display(message, selector) {
  return document.getElementById(selector).innerHTML = message;
}

function gameOfThrones() {
  var userGuess = parseInt(document.getElementById('guess-input').value);

  gameStarts()

  if(userGuess === number) {
    display(number, "number_guess");
    display("BOOM you guess was correct!!!", "message");
    resetBtn("#on_guess");
    setBtn(".reset");
  }
  else if(userGuess < number) {
    display(userGuess, "number_guess");
    display("That is too low!!!", "message");
    setBtn("clear");
  }
  else if(userGuess > number) {
    display(userGuess, "number_guess");
    display("That is too High!!!", "message");
    setBtn("#clear");
  }
}
