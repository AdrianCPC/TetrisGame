const GAME_CLOCK = 1000; // game of the game //
const BLOCK_SIDE_LENGTH = 30; // the length of the block's side //
const ROWS = 16; // number of rows for the canvas //
const COLS = 10; //number of columns for the canvas//
const SCORE_WORTH = 10;

const SHAPES = [
    //The next matrix represent every shape in Tetris//

    /* 1. This is the first shape in Tetris. This is the straight line */
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],

    /*2. This is the second shape in Tetris. The "L" */
    [
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0],
    ],

    /*This is the "L" in another direction */
    [
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0],
    ],

    /*3. This is the third shape in Tetris. The cube */
    [
        [4, 4],
        [4, 4],
    ],

    /*4. This is the fourth shape in Tetris. The "z" the other way around */
    [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0],
    ],

    /*5. This is the fifth figure in Tetris. The "T" the other way around */
    [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0],
    ],

    /*6. This is the "Z" in Tetris the other way around */

    [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
    ],
];

// These are random colors of every shape //
const COLORS = [
    "#1C2833",
    "#16A085",
    "#884EA0",
    "#8E44AD",
    "#F39C12",
    "#95A5A6",
    "#1C2833",
    "#9A7D0A",
];
