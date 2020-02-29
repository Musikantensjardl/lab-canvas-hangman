

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');

  }

  createBoard() {
    this.ctx.clearRect(0, 0, 800, 1200)
    this.drawLines()
  }

  drawLines() {

    let x = 300
    let y = 750
for (let i=0; i<hangman.secretWord.length; i++) {
  this.ctx.strokeStyle = "black"
  this.ctx.beginPath()
  this.ctx.moveTo(x,y)
  this.ctx.lineTo(x+=50,y)
  this.ctx.stroke()
  this.ctx.strokeStyle = 'white'
  this.ctx.lineTo(x += 20, y)
  this.ctx.closePath()
}


  }

  writeCorrectLetter(index) {
    let startingPoint = (hangman.secretWord.indexOf(index) * 70)+310
    this.ctx.font = "35px Arial";
    this.ctx.fillText(index, startingPoint, 750)
  }

  writeWrongLetter(letter, errorsLeft) {
    let y = (hangman.errorsLeft * 40) + 400
    this.ctx.font = "35px Arial";
    this.ctx.fillText(letter, 800, y)
   
this.ctx.clearRect(800, 30, 60, 60)
    this.ctx.fillText(hangman.errorsLeft, 800, 70)
    
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
