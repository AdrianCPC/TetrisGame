class GameModel {
  constructor(ctx) {
    this.ctx = ctx
    this.fallingPiece = null //Piezas
    this.grid = this.makeStartingGrid()
  }

//CREACION DE FILAS Y COLUMNAS
  makeStartingGrid() {
    let grid = []
    for (var i = 0; i < ROWS; i++) {
      for (var j = 0; j < COLS; j++) {
        grid[grid.length - 1].push(0)
      }
    }
    return grid;
  }


  //LOGICA PIEZAS CAYENDO
  collision(x, y) { 
    const shape = this.fallingPiece.shape
    const n = shape.length
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (shape[i][j] > 0) {
          let p = x + j
          let q = y + i
          if (p >= 0 && p < COLS && q < ROWS) {
            if (this.grid[q][p] > 0) {
              return true
            }
          } else {
            return true
          }
        }
      }
    }
    return false
  }

  //LOGICA RENDER DEL JUEGO
  renderGameState() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        let cell = this.grid[i][j]
        this.ctx.fillStyle = COLORS[cell]
        this.ctx.fillRect(j, i, 1, 1)
      }
    }
    if (this.fallingPiece !== null) {
      this.fallingPiece.renderPiee()
    }
  }

  //LOGICA MOVIMIENTO HACIA ABAJO
  moveDown() {
    if (this.fallingPiece === null) {
      this.renderGameState()
      return
    } else if (this.collision(this.fallingPiece.x, this.fallingPiece.y + 1)) {
      const shape = this.fallingPiece.shape
      const x = this.fallingPiece.x
      const y = this.fallingPiece.y
      shape.map((row, i) => {
        row.map((cell, j) => {
            let p = x + j
            let q = y + i
            if (p >= 0 && p < COLS && q < ROWS && cell > 0) {
              this.grid[q][p] = shape[i][j]
            }
        })
      })

      //LOGICA GAME OVER
      if (this.fallingPiece.y === 0) {
        alert("Game Over!")
        this.grid = this.makeStartingGrid()
      }
      this.fallingPiece = null
    } else {
      this.fallingPiece.y += 1
    }
    this.renderGameState()
  }

  //LOGICA ROTACION DE LAS PIEZAS
  move(right) {
    if (this.fallingPiece === null) {
      return
    }
    let x = this.fallingPiece.x
    let y = this.fallingPiece.y
    if (right) {
    //moviendo derecha
      if (!this.collision(x + 1, y)) {
        this.fallingPiece.x += 1
      }
    } else {
      //moviendo izquierda
      if (!this.collision(x - 1, y)) {
        this.fallingPiece.x -= 1
      }
    }
    this.renderGameState()
  }
  rotate() {
    if (this.fallingPiece !== null) {
      let shape = this.fallingPiece.shape
      //transposicion de la matriz
      for (let y = 0; y < shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [this.fallingPiece.shape[x][y], this.fallingPiece.shape[y][x]] =
          [this.fallingPiece.shape[y][x], this.fallingPiece.shape[x][y]]
        }
      }
      //REVERSION DEL ORDEN LAS LINEAS
      this.fallingPiece.shape.forEach((row => row.reverse()))
    }
    this.renderGameState()
  }
}
