/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 // a b c d
 // a d c a
var longestCommonSubsequence = function(text1, text2) {
    let dp = Array.from({length: text1.length}).map(() => Array.from({length: text2.length}).map(() => 0));

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] !== text2[j]) dp[i][j] = Math.max(i > 0 ? dp[i - 1][j] : 0, j > 0 ? dp[i][j - 1] : 0);
            else dp[i][j] = i > 0 && j > 0 ? dp[i - 1][j - 1] + 1 : 1;
        }
    }

    return dp.at(-1).at(-1);
};

/*

  a b c d e
a 1 1 1 1 1
c 1 1 2 2 2
e 1 1 2 2 3

ANS = arr.at(-1).at(-1);
*/