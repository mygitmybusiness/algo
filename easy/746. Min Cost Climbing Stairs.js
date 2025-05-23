/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    cost.push(0);
    
    for (let i = cost.length - 4; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2])
    }
    
    return Math.min(cost[0], cost[1])
};
