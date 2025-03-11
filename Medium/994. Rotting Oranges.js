/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const rottenOranges = new Array();

    let freshOranges = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 2) {
                rottenOranges.push([i, j]);
            } else if (grid[i][j] == 1) {
                freshOranges++;
            }
        }
    }

    // ?
    rottenOranges.push([-1, -1]);

    console.log(rottenOranges);

    let minutesElapsed = -1;
    let directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    while (rottenOranges.length) {
        let curr = rottenOranges.shift();
        let row = curr[0];
        let col = curr[1];

        if (row == -1) {
            minutesElapsed++;

            if (rottenOranges.length) rottenOranges.push([-1, -1])
        } else {
            for (let [r, c] of directions) {
                let neighborRow = row + r;
                let neighborCol = col + c;

                if (neighborRow >= 0 && neighborRow < rows &&
                    neighborCol >= 0 && neighborCol < cols
                ) {
                    if (grid[neighborRow][neighborCol] == 1) {
                        grid[neighborRow][neighborCol] = 2;
                        freshOranges--;
                        rottenOranges.push([neighborRow, neighborCol]);
                    }
                }
            }
        }
    }

    return freshOranges == 0 ? minutesElapsed : -1;
};