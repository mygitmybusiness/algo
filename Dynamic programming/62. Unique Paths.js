/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let island = Array.from({length: m}).map(() => Array.from({length: n}).map(() => 0));

    for (let u = 0; u < m; u++) {
        island[u][0] = 1;
    }

    for (let w = 0; w < n; w++) {
        island[0][w] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            island[i][j] = island[i - 1][j] + island[i][j - 1];
        }
    }

    return island[m - 1][n - 1];
};
