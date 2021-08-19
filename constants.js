const GAME_CLOCK = 1000;
const BLOCK_SIDE_LENGTH = 30;
const ROW = 20; // number of rows for the canvas //
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

    /*4. This is the fourth shape in Tetris. The "z" */
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

const COLORS = [
    "#000000",
    "#0000FF",
    "#FFFF00",
    "#00FF00",
    "#FF0000",
    "#10FF01",
    "#FF0001",
];
