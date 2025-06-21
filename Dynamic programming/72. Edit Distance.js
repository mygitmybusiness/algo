/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = Array.from({ length: word1.length + 1 }).map(() =>
        Array.from({ length: word2.length + 1 }).map(
            () => Number.MAX_SAFE_INTEGER
        )
    );

    for (let j = 0; j < word2.length + 1; j++) {
        dp[word1.length][j] = word2.length - j;
    }

    for (let i = 0; i < word1.length + 1; i++) {
        dp[i][word2.length] = word1.length - i;
    }

    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            if (word1[i] == word2[j]) dp[i][j] = dp[i + 1][j + 1];
            else dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
};
