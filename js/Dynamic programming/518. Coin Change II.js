/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = Array.from({length: amount + 1}).map(() => 0);
    dp[0] = 1;

    for (let i = coins.length - 1; i >= 0; i--) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }

    return dp[amount] <= Number.MAX_SAFE_INTEGER ? dp[amount] : -1;
};
