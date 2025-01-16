/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);

        if (prices[i] > minPrice) {
            profit = Math.max(profit, prices[i] - minPrice);
        }
    }

    return profit;
};
