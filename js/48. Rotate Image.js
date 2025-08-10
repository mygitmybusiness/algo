/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// [7,4,1]
// [8,5,2]
// [9,6,3]
var rotate = function (matrix) {
    let N = matrix.length;

    // [1,2,3]      [1,4,7]
    // [4,5,6]  ->  [2,5,8]
    // [7,8,9]      [3,6,9]
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reflect
    for (let i = 0; i < N; i++) {
        let l = 0;
        let r = N - 1;
        while (l < r) {
            let tmp = matrix[i][l];
            matrix[i][l] = matrix[i][r];
            matrix[i][r] = tmp;
            l++;
            r--;
        }
    }
};
