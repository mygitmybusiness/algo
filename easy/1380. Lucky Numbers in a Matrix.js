/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let numbers = [];
    let maxCols = [];
    let minRows = [];

    for (let i = 0; i < matrix.length; i++) {
        minRows[i] = Math.min(...matrix[i]);

        for (let j = 0; j < matrix[i].length; j++) {
            maxCols[j] = maxCols[j] ? Math.max(matrix[i][j], maxCols[j]) : matrix[i][j];
        }
    }

    console.log(maxCols + ' VS ' + minRows);

    for (let i = 0; i < maxCols.length; i++) {
        if (minRows.indexOf(maxCols[i]) != -1) {
            numbers.push(maxCols[i]);
        }
    }

    return numbers;
};
