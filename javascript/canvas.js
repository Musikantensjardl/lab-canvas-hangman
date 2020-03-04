

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
    let y = (-hangman.errorsLeft * 40) + 550

    if (hangman.errorsLeft >0)
{    this.ctx.font = "35px Arial";
    this.ctx.fillText(letter, 800, y)
   
this.ctx.clearRect(800, 30, 60, 60)
    this.ctx.fillText(hangman.errorsLeft, 800, 70)}

   
  }

  drawHangman(errorsLeft) {
if (errorsLeft===9) {

  this.ctx.strokeStyle = "black"
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(200,600)
  this.ctx.lineTo(400, 600)
  this.ctx.stroke()
  this.ctx.lineTo(300, 510)
  this.ctx.stroke()
  this.ctx.lineTo(200, 600)
  this.ctx.stroke()
  this.ctx.closePath()

} else if (errorsLeft===8) {
  this.ctx.strokeStyle = "black"
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(300,510)
  this.ctx.lineTo(300, 200)
  this.ctx.stroke()
  this.ctx.closePath()
}





else if (errorsLeft===7) {

  
  this.ctx.strokeStyle = "black"
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(300,200)
  this.ctx.lineTo(500, 200)
  this.ctx.stroke()
  this.ctx.closePath()

}
else if (errorsLeft===6) {

  
  this.ctx.strokeStyle = "black"
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(500,200)
  this.ctx.lineTo(500, 300)
  this.ctx.stroke()
  this.ctx.closePath()

}
else if (errorsLeft===5) {

  
  this.ctx.strokeStyle = "black"
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.arc(500, 320, 20, 0, Math.PI * 2) //head
  this.ctx.stroke();
  this.ctx.closePath();

} 
else if (errorsLeft===4) {

  
  this.ctx.strokeStyle = "black" //body
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(500,340)
  this.ctx.lineTo(500, 400)
  this.ctx.stroke()
  this.ctx.closePath()

} 
else if (errorsLeft===3) {

  
  this.ctx.strokeStyle = "black" //left arm
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(500,360)
  this.ctx.lineTo(480, 350)
  this.ctx.stroke()
  this.ctx.closePath()

} 
else if (errorsLeft===2) {

  
  this.ctx.strokeStyle = "black"// right arm
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(500,360)
  this.ctx.lineTo(520, 350)
  this.ctx.stroke()
  this.ctx.closePath()

} 
else if (errorsLeft===1) {

  
  this.ctx.strokeStyle = "black" //right foot
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(500,400)
  this.ctx.lineTo(480, 410)
  this.ctx.stroke()
  this.ctx.closePath()

} 
else if (errorsLeft===0) {

  
  this.ctx.strokeStyle = "black" //left foot
  this.ctx.lineWidth = 7
  this.ctx.beginPath()
  this.ctx.moveTo(500,400)
  this.ctx.lineTo(520, 410)
  this.ctx.stroke()
  this.ctx.closePath()

} 
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
