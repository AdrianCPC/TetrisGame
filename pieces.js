//Creating single falling piece
class Piece {
  constructor(shape, ctx) { //In this constructor have shape and canvas context
    this.shape = shape
    this.ctx = ctx
    this.y = 0
    this.x = Math.floor(COLS / 2) //Where the piece will be at the start( in middle)
  }

  //Rendering piece
  renderPiece() {
    this.shape.map((row, i) => {
      row.map((cell, i) => {
        if (cell > 0) {
          this.ctx.fillStyle = COLORS[cell]//Fill empty squares with colour
          this.ctx.fillRect(this.x + j, this.y + i, 1, 1)
        }
      })
    })
  }
}