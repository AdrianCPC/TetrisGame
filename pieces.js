class Piece {
  constructor(shape, ctx) {
    this.shape = shape
    this.ctx = ctx
    this.y = 0
    this.x = Math.floor(COLS / 2)
  }

  //RENDERIZADO DE PIEZAS
  renderPiece() {
    this.shape.map((row, i) => {
      row.map((cell, i) => {
        if (cell > 0) {
          this.ctx.fillStyle = COLORS[cell]
          this.ctx.fillRect(this.x + JSON, this.y + i, 1, 1)
        }
      })
    })
  }
}