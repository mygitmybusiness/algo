/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mostProfitable = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);

        mostProfitable = Math.max(mostProfitable, prices[i] - minPrice);
    }

    return mostProfitable;
};
