//This JS file is about the setting of the tetris game //

let canvas = document.getElementById("game-canvas"); // calling the element canvas by its id //
let scoreboard = document.getElementById("scoreboard"); // calling the h2 element by its id //
let ctx = canvas.getContext("2d"); // in this part we call the object context called "ctx" //
ctx.scale(BLOCK_SIDE_LENGTH, BLOCK_SIDE_LENGTH);
// then we scale the object "ctx" by the length of the side of the block, this is for another unit to now lock on side length times//

let model = new GameModel(ctx); // here we call the object ctx and we

let score = 0; // variable that save the score //

setInterval(() => {
    // Execute a function repetitively each time the specified period of time expires. Returns a process ID.//
    newGameState(); // this function we will call it later //
}, GAME_CLOCK); // we are calling the constant GAME_CLOCK and it will repeat every 1000 milliseconds//

/* In each game we must check if there are full lines. */

let newGameState = () => {
    fullSend();
    if (model.fallingPiece === null) {
        // Here we check if there is a falling piece //
        const rand = Math.round(Math.random() * 6) + 1; // if there is a falling piece, in this part the game select a random piece//
        /* Math.round = Returns the value of the given number rounded to the nearest integer. */
        const newPiece = new newPiece(SHAPES[rand], ctx); //the new piece is saved here //
        model.fallingPiece = newPiece;
        model.moveDown(); // The new piece goes down automatcally //
    } else {
        model.moveDown(); // otherwise, if there is already a piece falling, just need to move down //
    }
};

/*This fullSend function tells us if there is a full line and then get rid of that and also increase the score */
const fullSend = () => {
    const allfilled = (row) => {
        for (let x of row) {
            // this row is full or no //
            if (x === 0) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < model.grid.length; i++) {
        //checking the board for the first row //
        if (allFilled(model.grid[i])) {
            /* if any row is filled, so the score will increase and it was defined with the constanst SCORE_wORTH */
            score += SCORE_WORTH; //increase the score 10 points //
            model.grid.splice(i, 1); // this part splice to get rid of the full line //
            model.grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // To undo an empty line column of 10 //
        }
    }

    scoreboard.innerHTML = "Score: " + String(score); // To update the score in the HTML //
};

// This part is made for playing with the keyword: //

document.addEventListener("keydown", (e) => {
    // this is an event that responds with the keyboard //
    e.preventDefault();
    switch (e.key) {
        case "w":
            model.rotate(); //letter "w" = Change the position of the shape//
            break;
        case "d":
            model.move(true); //letter "d" = Right //
            break;
        case "s":
            model.moveDown(); //letter "s" = move the shape down //
            break;
        case "a":
            model.move(false); //letter "a" = Left //
            break;
    }
});
