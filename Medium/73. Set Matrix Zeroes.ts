/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
    let zeroes = [];

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                zeroes.push([i, j]);
            }
        }
    }

    while (zeroes.length) {
        let curr = zeroes.shift();

        matrix[curr[0]] = new Array(matrix[curr[0]].length).fill(0);

        for (var i = 0; i < matrix.length; i++) {
            matrix[i][curr[1]] = 0;
        }
    }
};
