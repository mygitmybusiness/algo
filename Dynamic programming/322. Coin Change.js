/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = Array.from({length: amount + 1}).map(() => Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i = 1; i < dp.length; i++) {
        for (let coin of coins) {
            if (i >= coin) dp[i] = Math.min(dp[i - coin] + 1, dp[i])
        }
    }

    return dp.at(-1) != Number.MAX_SAFE_INTEGER ? dp.at(-1) : -1;
};
