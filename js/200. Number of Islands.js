/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const [M, N] = [grid.length, grid[0].length];
    let numberOfIslands = 0;

    let search = (y, x) => {
        if (grid[y][x] == '0') return;

        grid[y][x] = '0';

        if (y > 0) search(y - 1, x);
        if (x < N - 1) search(y, x + 1);
        if (y < M - 1) search(y + 1, x);
        if (x > 0) search(y, x - 1);
    }

    for (let y = 0; y < M; y++) {
        for (let x = 0; x < N; x++) {
            if (grid[y][x] == "1") {
                numberOfIslands++;
                search(y, x);
            }
        }
    }

    return numberOfIslands;
};
