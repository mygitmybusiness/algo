/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let a = 0, b = 0;

    for (var i of position) {
        if (i % 2 != 0) {
            a++;
        } else {
            b++;
        }
    }

    return Math.min(a, b);
};
