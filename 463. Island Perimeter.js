/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                var up = i == 0 ? 0 : grid[i - 1][j];
                var right = j == grid[i].length - 1 ? 0 : grid[i][j + 1];
                var down = i == grid.length - 1 ? 0 : grid[i + 1][j];
                var left = j == 0 ? 0 : grid[i][j - 1];

                perimeter += 4 - left - up - right - down;
            };
        }
    }

    return perimeter;
};
