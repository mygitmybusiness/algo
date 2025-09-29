/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;

    for (let i = 1; i < prices.length; i++) {
        let dp = prices[i] - prices[i - 1];
        if (dp > 0) res += dp;
    }

    return res;
};
