
class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
this.errorsLeft = 10
this.guessedLetters = ""
this.letters = []


  }

  pickWord() {
let randomPos = Math.floor(Math.random() * this.words.length);
return this.words[randomPos]

  }

  checkIfLetter(keyCode) {
if (keyCode <= 90 && keyCode >=65) {
  return true
} else {return false}
  }

  checkClickedLetters(letter) {
if (this.letters.includes(letter)){
  return false
} else {return true}
  }

  addCorrectLetter(letter) {
this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.letters.push(letter)
this.errorsLeft--
console.log(this.errorsLeft)
  }

  checkGameOver() {
if (this.errorsLeft > 0) {
  return false
} else {return true}
  }

  checkWinner() {
    let correctLettersAlphabetical = this.guessedLetters.split('').sort().join('');
    let correctLettersSecretWord = this.secretWord.split('').sort().join('')
  if (correctLettersAlphabetical == correctLettersSecretWord) {return true} else {return false}
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
hangmanCanvas.createBoard()
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {

if (hangman.secretWord.includes(event.key)) {
hangmanCanvas.writeCorrectLetter(event.key) }
else {
  hangmanCanvas.writeWrongLetter(event.key, this.errorsLeft) 
hangman.addWrongLetter(event.key)
}


});
