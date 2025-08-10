/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = Array.from({length: s.length + 1}).map(() => false);
    dp[dp.length - 1] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (let str of wordDict) {
            if (i + str.length <= s.length && s.slice(i, i + str.length) == str) {
                dp[i] = dp[i + str.length];
                if (dp[i]) break;
            }
        }
    }

    return dp[0];
};
