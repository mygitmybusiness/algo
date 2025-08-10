/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (!costs.length) return 0;
    // red, green, blue
    let dpArray = Array.from({length: costs.length}, () => Array.from({length: 3}).fill(0));

    dpArray[0] = costs[0];

    for (let i = 1; i < costs.length; i++) {
        for (let j = 0; j < dpArray[i].length; j++) {
            if (j == 0) dpArray[i][j] = costs[i][j] + Math.min(dpArray[i-1][1], dpArray[i-1][2]); // left
            if (j == 1) dpArray[i][j] = costs[i][j] + Math.min(dpArray[i-1][2], dpArray[i-1][0]); // mid
            if (j == 2) dpArray[i][j] = costs[i][j] + Math.min(dpArray[i-1][0], dpArray[i-1][1]); // right
        }
    }

    return Math.min(...dpArray.at(-1));
};
