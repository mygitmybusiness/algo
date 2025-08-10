/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (cost.legnth < 2) return 0;
    
    let costed = [0, ...cost, 0];
    const N = costed.length; 

    // baza = 0, 1, 2

    for (let i = 2; i < N; i++) {
        costed[i] = Math.min(costed[i - 1], costed[i - 2]) + costed[i];
    }

    return costed.at(-1);
};