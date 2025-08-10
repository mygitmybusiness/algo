/**
 * @param {number[]} x
 * @param {number[]} y
 * @return {number}
 */
var maxSumDistinctTriplet = function(x, y) {
    let map = new Map();

    for (let i = 0; i < x.length; i++) {
        map.set(x[i], Math.max((map.get(x[i]) || -1), y[i]));
    }

    if (map.size < 3) return -1;
    
    let res = [...map.values()].sort((a, b) => b - a);
    return res.splice(0, 3).reduce((val, acc) => val + acc, 0);
};
