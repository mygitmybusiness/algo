/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            dp[row][col] = mat[row][col];
        }
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (dp[row][col] == 0) {
                continue;
            }

            let minNeighbor = m * n;
            if (row > 0) {
                minNeighbor = Math.min(minNeighbor, dp[row - 1][col]);
            }

            if (col > 0) {
                minNeighbor = Math.min(minNeighbor, dp[row][col - 1]);
            }

            dp[row][col] = minNeighbor + 1;
        }
    }

    for (let row = m - 1; row >= 0; row--) {
        for (let col = n - 1; col >= 0; col--) {
            if (dp[row][col] == 0) {
                continue;
            }

            let minNeighbor = m * n;
            if (row < m - 1) {
                minNeighbor = Math.min(minNeighbor, dp[row + 1][col]);
            }

            if (col < n - 1) {
                minNeighbor = Math.min(minNeighbor, dp[row][col + 1]);
            }

            dp[row][col] = Math.min(dp[row][col], minNeighbor + 1);
        }
    }

    return dp;
};
