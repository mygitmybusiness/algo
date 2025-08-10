/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let n = matrix.length;
    let i = 0;
    let indices = [];

    while (i < n) {
        let k = matrix[i].length;
        let j = 0;

        while (j < k) {
            if (matrix[i][j] == 0) indices.push([i,j]);
            j++;
        }

        i++;
    }

    for (let [row, col] of indices) {
        matrix[row] = new Array(matrix[row].length).fill(0);

        for (let row of matrix) {
            row[col] = 0;
        }
    }

    return matrix;
};
