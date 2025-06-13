/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let dp = Array.from({ length: obstacleGrid.length }).map(() => Array.from({ length: obstacleGrid[0].length }).map(() => 0));

    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = obstacleGrid[i][0] == 1 ? 0 : 1;
        if (obstacleGrid[i][0] == 1) break;
    }

    for (let j = 0; j < dp[0].length; j++) {
        dp[0][j] = obstacleGrid[0][j] == 1 ? 0 : 1;
        if (obstacleGrid[0][j] == 1) break;
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            if (obstacleGrid[i][j] == 1) dp[i][j] = 0;
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[dp.length - 1][dp[0].length - 1];
};
