/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        let row = new Set();
            col = new Set();
            square = new Set();

        for (let j = 0; j < board.length; j++) {
            let checkRow = board[i][j],
                checkCol = board[j][i],
                checkSquare = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
                
            if (checkRow !== '.') {
                if (row.has(checkRow)) return false;
                row.add(checkRow);
            }

            if (checkCol !== '.') {
                if (col.has(checkCol)) return false;
                col.add(checkCol);
            }

            if (checkSquare != '.') {
                if (square.has(checkSquare)) return false;
                square.add(checkSquare);
            } 
        }
    }

    return true;
};
